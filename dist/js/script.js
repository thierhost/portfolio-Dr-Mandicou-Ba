
$(document).ready(function() {
    "use strict";
    // loader

    $('#page-loader span').animate({'width': '100%'}, 10000);

    $('#page-loader span').stop().animate({'width': '100%'}, 500, function () {
        $(this).parent('#page-loader').fadeOut(500);
    });

    //scroller
    checkScrollTop();

    $(window).scroll(function(){
        checkScrollTop();
    });

    function checkScrollTop(){
        if ($(window).scrollTop()< 10){
            $('#main-nav').removeClass('is-sticky');
        }
        else{
            $('#main-nav').addClass('is-sticky');
        }
    }

    $('body').on('click','a.scrollto',function(e){

        e.preventDefault();

        var target =$(this).attr('href');

        $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1600, 'easeInOutExpo',
            function(){window.location.hash =target;});

        if ($('.navbar-collapse').hasClass('in')){
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });

    
});
