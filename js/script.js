/**
 * Created by Александр on 30.07.15.
 */
$(document).ready(function() {

    $("#main_slider").owlCarousel({
        items               : 1,
        itemsDesktop        : [1199,1],
        itemsDesktopSmall   : [979,1],
        itemsTablet         : [768,1],
        itemsMobile         : [479,0],
        singleItem          : true,
        pagination          : false

    });

    $("#ag-ads-slider").owlCarousel({
        items               : 4,
//        itemsDesktop        : [1270,4],
//        itemsDesktopSmall   : [960,3],
//        itemsTablet         : [720,2],
//        itemsMobile         : [320,1],
        navigation          : true,
        slideSpeed          : 300,
        itemsScaleUp        : false,
        pagination          : false,
        navigationText      : ['', '']
    });

    $("#full-search-btn").click(function(event){
        event.preventDefault();

        var fullSearch = $('#full-search');
        var blackuot = $('#blackout');

        if (fullSearch.css('display') == 'none'){
            fullSearch.slideDown('fast', function(){
                var $top = fullSearch.offset().top + fullSearch.outerHeight();
                var $bottom = $(document).outerHeight() - $top;
                var $with = $(document).outerWidth();

                blackuot
                    .css('top', $(document).scrollTop())
                    .offset({top:$top, left:0})
                    .height($bottom)
                    .width($with)
                    .show();
            });
        } else {
            blackuot.slideUp('fast', function() {
                fullSearch.slideUp();
            });
        }
    });



});