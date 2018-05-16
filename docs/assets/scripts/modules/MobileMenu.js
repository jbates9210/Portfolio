import $ from 'jquery';

class MobileMenu {
    constructor() {
        $('.header-nav__menu-icon').click(function() {
            console.log('Icon clicked');
        });
    }
}

export default MobileMenu;