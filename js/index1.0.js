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

let readMoreBtn1 = document.getElementById('read-more1');
let readMoreBtn2 = document.getElementById('read-more2');
let readMoreBtn3 = document.getElementById('read-more3');
let readMoreDetail1 = document.getElementById('read-more-detail1');
let readMoreDetail2 = document.getElementById('read-more-detail2');
let readMoreDetail3 = document.getElementById('read-more-detail3');


readMoreBtn1.addEventListener('click',function() {
    if (readMoreDetail1.style.display === 'block') {
        readMoreDetail1.style.display = 'none';
        readMoreBtn1.innerHTML = 'READ MORE'
    } else {
        readMoreDetail1.style.display = 'block';
        readMoreBtn1.innerHTML = 'HIDE'
    }
})

readMoreBtn2.addEventListener('click',function() {
    if (readMoreDetail2.style.display === 'block') {
        readMoreDetail2.style.display = 'none';
        readMoreBtn2.innerHTML = 'READ MORE'
    } else {
        readMoreDetail2.style.display = 'block';
        readMoreBtn2.innerHTML = 'HIDE'
    }
})

readMoreBtn3.addEventListener('click',function() {
    if (readMoreDetail3.style.display === 'block') {
        readMoreDetail3.style.display = 'none';
        readMoreBtn3.innerHTML = 'READ MORE'
    } else {
        readMoreDetail3.style.display = 'block';
        readMoreBtn3.innerHTML = 'HIDE'
    }
})


// $('.read-more').on('click',function() {
//     if ($('.read-more-detail').css('display') == 'none') {
//         $('.read-more-detail').css('display','block');
//         $('.read-more').html('HIDE');
//     } else {
//         $('.read-more-detail').css('display','none');
//     }
//     // $('.read-more-detail').css('display','block');
//     console.log($('.read-more-detail').css('display'));
// })

// let readMoreBtn = document.getElementsByClassName('read-more');
// let readMoreDetail = document.getElementsByClassName('read-more-detail');

// for (var i = 0; i < readMoreBtn.length; i++) {
//     readMoreBtn[i].addEventListener('click',function() {
//         console.log(readMoreDetail[0].display);
//     })
// }