import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.headerNav = $('.header-nav');
        this.menuIcon = $('.header-nav__menu-icon');
        this.menuContent = $('.header-nav__menu');
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuContent.toggleClass('header-nav__menu--is-visible');
        this.headerNav.toggleClass('header-nav--is-expanded');
        this.menuIcon.toggleClass("header-nav__menu-icon--close-x");
    }
}

export default MobileMenu;