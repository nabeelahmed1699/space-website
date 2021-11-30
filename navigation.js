const primaryNavigation = document.querySelector('.primary-navigation');

const mobileToggle = document.querySelector('.mobile-nav-toggle');


// when someone clicks the hamburger
mobileToggle.addEventListener('click', handleNavigation);

function handleNavigation() {
    let visibility = primaryNavigation.getAttribute('data-visible');

    if (visibility === 'false') {

        primaryNavigation.setAttribute('data-visible', true);
        mobileToggle.setAttribute('aria-expanded', true);
        return;
    }

    primaryNavigation.setAttribute('data-visible', false);
    mobileToggle.setAttribute('aria-expanded', false);

}