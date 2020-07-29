$(window).scroll(function () {


    var AboutTop = $(".Index_P2").offset().top; //1100
    var videoTop = $(".Index_P3").offset().top; 
    var introTop = $(".Index_P4").offset().top; 
    console.log( introTop- (introTop-videoTop)*.5)



    // 介紹頁左圖 //550
    if ($(window).scrollTop() < AboutTop*0.5) {
        $("#About_L").css('opacity', '0');
        $('#About_L').removeClass('animate__animated animate__fadeInLeft');
    } else if ($(window).scrollTop() >= AboutTop*0.5) {
        $('#About_L').addClass('animate__animated animate__fadeInLeft');
    }



    // 介紹頁右方內容 
    if ($(window).scrollTop() < AboutTop*0.5) {
        $("#About_R").css('opacity', '0');
        $('#About_R').removeClass('animate__animated animate__fadeInRight');
    } else if ($(window).scrollTop() >= AboutTop*0.5) {
        $('#About_R').addClass('animate__animated animate__fadeInRight');
    }


    // 影片區 1200
    if ($(window).scrollTop() < videoTop- (videoTop-AboutTop)*.5) {
        $(".videoPage").css('opacity', '0');
        $('.videoPage').removeClass('animate__animated animate__fadeIn');
    } else if ($(window).scrollTop() >= videoTop- (videoTop-AboutTop)*.5) {
        $('.videoPage').addClass('animate__animated animate__fadeIn');
    }



    // 作品區塊
    if ($(window).scrollTop() < introTop- (introTop-videoTop)*.5) {
        $(".introAni").css('opacity', '0');
        $('.intro:nth-child(1) .introAni').removeClass('animate__animated animate__fadeInDown');
        $('.intro:nth-child(2) .introAni').removeClass('animate__animated animate__fadeInUp');
        $('.intro:nth-child(3) .introAni').removeClass('animate__animated animate__fadeInDown');
        $('.intro:nth-child(4) .introAni').removeClass('animate__animated animate__fadeInRight');

    } else if ($(window).scrollTop() >= introTop- (introTop-videoTop)*.5) {

        $('.intro:nth-child(1) .introAni').addClass('animate__animated animate__fadeInDown');
        $('.intro:nth-child(2) .introAni').addClass('animate__animated animate__fadeInUp');
        $('.intro:nth-child(2) .introAni').css('animation-delay', '0.05s');
        $('.intro:nth-child(3) .introAni').addClass('animate__animated animate__fadeInDown');
        $('.intro:nth-child(3) .introAni').css('animation-delay', '0.2s');
        $('.intro:nth-child(4) .introAni').addClass('animate__animated animate__fadeInRight');
        $('.intro:nth-child(4) .introAni').css('animation-delay', '0.3s');
    }


   


})



// 超連結卷軸
$(function () {
    $('#a_Home').click(function () {
        $('html,body').animate({ scrollTop: $('#home').offset().top }, "slow");
        return false;
    });


    $('#a_About').click(function () {
        $('html,body').animate({ scrollTop: $('#aboutMe').offset().top }, "slow");
        return false;
    });


    $('#a_Gallery').click(function () {
        $('html,body').animate({ scrollTop: $('#gallery').offset().top }, "slow");
        return false;
    });



});




// ---------------首頁動態----------------

$('.indexPic_Center').addClass('ld ld-wander-v ');
$('#indexPic').hover(
    function () { $(this).addClass('ld ld-tick') },
    function () { $(this).removeClass('ld ld-tick') }
)


$('.playIcon').hover(
    function () { $(this).addClass('ld ld-beat') },
    function () { $(this).removeClass('ld ld-beat') }
)


$('.indexPic_Sec').addClass('animate__animated animate__fadeInDown');
$('.indexPic_Sec').css('animation-delay', '0.5s');

