// for hamburger menu
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

$(function() {
    $('.globalMenuSp a[href]').click(function() {
        $('.globalMenuSp').removeClass('active');
        $('.hamburger').removeClass('active');
    });
});

// hide and show menu
var menuHeight = $('#mainMenu').height();
var startPos = 0;
$(window).scroll(function() {
    var currentPos = $(this).scrollTop();
    if (currentPos > startPos) {
        if ($(window).scrollTop() >= 200) {
            // $('.nav').css("top", "-40" + menuHeight + "px");
            $('#mainMenu').addClass("upMove");
            $('#mainMenu').removeClass("downMove");
            //
            $('#small').addClass("upMove");
            $('#small').removeClass("downMove");
        }
    } else {
        // $('.nav').css("top",0 + "px");
        $('#mainMenu').addClass("downMove");
        $('.nav').removeClass("upMove");
        //
        $('#mainMenu').addClass("downMove");
        $('#small').removeClass("upMove");
    }
    startPos = currentPos;
})

// fade-in animation when scroll down
var window_h = $(window).height();
$(window).on("scroll",function() {
    var scroll_top = $(window).scrollTop();
    $('.fadeInLeft').each(function() {
        var elem_pos = $(this).offset().top;
        if (scroll_top >= elem_pos - window_h + 300) {
            $(this).addClass('fadeInFromLeft');
        } else {
            // $(this).removeClass('fadeInFromLeft');
        }
    });
    //
    $('.fadeInRight').each(function() {
        var elem_pos = $(this).offset().top;
        if (scroll_top >= elem_pos - window_h + 300) {
            $(this).addClass('fadeInFromRight');
        } else {
            // $(this).removeClass('fadeInFromRight');
        }
    });
    //
    $('.fadeInBottom').each(function() {
        var elem_pos = $(this).offset().top;
        if (scroll_top >= elem_pos - window_h + 300) {
            $(this).addClass('fadeInFromBottom');
        } else {
            // $(this).removeClass('fadeInFromBottom');
        }
    });
    //for project section
    $('.fadeInOrange1').each(function() {
        var elem_pos = $(this).offset().top;
        if (scroll_top >= elem_pos - window_h + 300) {
            $(this).addClass('fadeInFromLeft');
        } else {
            // $(this).removeClass('fadeInFromBottom');
        }
    });
    // $('.fadeInBlue').each(function() {
    //     var elem_pos = $(this).offset().top;
    //     if (scroll_top >= elem_pos - window_h + 300) {
    //         $(this).addClass('fadeInFromRight');
    //     } else {
    //         // $(this).removeClass('fadeInFromBottom');
    //     }
    // });
    $('.fadeInOrange2').each(function() {
        var elem_pos = $(this).offset().top;
        if (scroll_top >= elem_pos - window_h + 300) {
            $(this).addClass('fadeInFromLeft');
        } else {
            // $(this).removeClass('fadeInFromBottom');
        }
    });
});

//going back to top of the page
$('#arrowToTop').on('click',function() {
    window.scrollTo({top:0, behavior: 'smooth'});
})
