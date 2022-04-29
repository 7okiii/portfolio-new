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
