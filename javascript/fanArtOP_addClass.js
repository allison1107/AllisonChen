$(window).scroll(function () {


    // 剪掉100

    var P2Top = $(".fanArt_P2").offset().top;
    var P3Top = $(".fanArt_P3").offset().top;
    var P4Top = $(".fanArt_P4").offset().top;
    var P5Top = $(".fanArt_P5").offset().top;
    var P6Top = $(".fanArt_P6").offset().top;
    var P7Top = $(".fanArt_P7").offset().top;
    var P8Top = $(".fanArt_P8").offset().top;
    var P9Top = $(".fanArt_P9").offset().top;
    var P10Top = $(".fanArt_P10").offset().top;

    console.log(P3Top)



    // 介紹頁
    if ($(window).scrollTop() < P2Top * .5 - 300) {
        $("#P2_textArea").css('opacity', '0');
        $('#P2_textArea').removeClass('animate__animated animate__fadeInUp');
    } else if ($(window).scrollTop() >= P2Top * .5 - 300) {
        $('#P2_textArea').addClass('animate__animated animate__fadeInUp');
    }



    // MICDROP
    if ($(window).scrollTop() < P3Top - (P3Top - P2Top) * 0.5 - 300) {
        $("#fanP3_ID img").css('opacity', '0');
        $('#fanP3_ID img').removeClass('animate__animated animate__fadeInLeft');
    } else if ($(window).scrollTop() >= P3Top - (P3Top - P2Top) * 0.5 - 300) {
        $('#fanP3_ID img').addClass('animate__animated animate__fadeInLeft');
    }

    // 台灣場
    if ($(window).scrollTop() < P4Top - (P4Top - P3Top) * 0.5 - 100) {
        $(".fanArt_P4 img").css('opacity', '0');
        $('.fanArt_P4 img').removeClass('animate__animated animate__fadeInDown');
    } else if ($(window).scrollTop() >= P4Top - (P4Top - P3Top) * 0.5 - 100) {
        $('.fanArt_P4 img').addClass('animate__animated animate__fadeInDown');
    }

    // 影片
    if ($(window).scrollTop() < P5Top - (P5Top - P4Top) * 0.5 - 100) {
        $(".fanArt_P5 video").css('opacity', '0');
        $('.fanArt_P5 video').removeClass('animate__animated animate__fadeIn');
    } else if ($(window).scrollTop() >= P5Top - (P5Top - P4Top) * 0.5 - 100) {
        $('.fanArt_P5 video').addClass('animate__animated animate__fadeIn');
    }



    // 小卡
    if ($(window).scrollTop() < P6Top - (P6Top - P5Top) * 0.5 - 100) {
        $(".fanArt_P6 img").css('opacity', '0');
        $('.fanArt_P6>.row>div:nth-child(odd)>img').removeClass('animate__animated animate__fadeInDown');
        $('.fanArt_P6>.row>div:nth-child(even)>img').removeClass('animate__animated animate__fadeInUp');
    } else if ($(window).scrollTop() >= P6Top - (P6Top - P5Top) * 0.5 - 100) {
        $('.fanArt_P6>.row>div:nth-child(odd)>img').addClass('animate__animated animate__fadeInDown');
        $('.fanArt_P6>.row>div:nth-child(even)>img').addClass('animate__animated animate__fadeInUp');
    }

    // cookey
    if ($(window).scrollTop() < P8Top - (P8Top - P7Top) * 0.5 - 100) {
        $(".fanArt_P8 img").css('opacity', '0');
        $('.fanArt_P8 img').removeClass('animate__animated animate__fadeInLeft');
    } else if ($(window).scrollTop() >= P8Top - (P8Top - P7Top) * 0.5 - 100) {
        $('.fanArt_P8 img').addClass('animate__animated animate__fadeInLeft');
    }

    // 方形卡
    if ($(window).scrollTop() < P9Top - (P9Top - P8Top) * 0.5 - 100) {
        $(".fanArt_P9 img").css('opacity', '0');
        $('.fanArt_P9 img').removeClass('animate__animated animate__fadeInDown');
    } else if ($(window).scrollTop() >= P9Top - (P9Top - P8Top) * 0.5 - 100) {
        $('.fanArt_P9 img').addClass('animate__animated animate__fadeInDown');
    }


    // 影片
    if ($(window).scrollTop() < P10Top - (P10Top - P9Top) * 0.5 - 100) {
        $(".fanArt_P10 video").css('opacity', '0');
        $('.fanArt_P10 video').removeClass('animate__animated animate__fadeIn');
    } else if ($(window).scrollTop() >= P10Top - (P10Top - P9Top) * 0.5 - 100) {
        $('.fanArt_P10 video').addClass('animate__animated animate__fadeIn');
    }


})

$('.fanArt_Logo').addClass('ld ld-bounceAlt');
$('#P1_Shadow').addClass('ld ld-blur');
$('.fanArt_P11 img').addClass('ld ld-wander-v');
animate__fadeInLeft