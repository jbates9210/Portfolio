import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.headerNav = $('.header-nav');
        this.btnTrigger = $('.btn');
        this.createHeaderWaypoint();
        this.headerLinks = $('.primary-nav a');
        this.smoothScrolling();
    }

    smoothScrolling() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.btnTrigger[0],
            handler: function(direction) {
                if (direction == 'down') {
                    that.headerNav.addClass('header-nav--dark');
                } else {
                    that.headerNav.removeClass('header-nav--dark');
                }
            }
        });
    }
}

export default StickyHeader;