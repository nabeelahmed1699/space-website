const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');


tabList.addEventListener('keydown', changeTabFocus);


tabs.forEach(tab => {
    tab.addEventListener('click', changeTabPanel);
});
let tabFocus = 0;

function changeTabFocus(e) {

    const keydownLeft = 37;
    const keydownRight = 39;

    // change the index of the current selected tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute('tabindex', -1);
    }

    // if the left arrow key is pressed then move to the left side 
    if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }

    // if the right arrow key is pressed then move to the right side
    if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }
    // changing the tab index and focus of other tab 
    tabs[tabFocus].setAttribute('tabindex', 0);
    tabs[tabFocus].focus();
}

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetTabPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image")

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    // to change the focus in the button
    tabContainer.querySelector('[aria-selected = true]').setAttribute('aria-selected', false);
    targetTab.setAttribute('aria-selected', true);

    hideContent(mainContainer, '[role = "tabpanel"]');

    showContent(mainContainer, targetTabPanel);

    hideContent(mainContainer, 'picture')

    showContent(mainContainer, targetImage);
}


function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
    parent.querySelector([`#${content}`]).removeAttribute('hidden');
}