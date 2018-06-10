import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $('.row__medium-6');
        this.hideInit();
        this.createWaypoints();
    }

    hideInit() {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints() {
        this.itemsToReveal.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: '75%'
            });
        });
    }
}

export default RevealOnScroll;