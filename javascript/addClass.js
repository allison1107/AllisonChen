// ---------------漢堡----------------
function hamb() {
    if ($('#hamb-icon').hasClass("hamb") == false) { $('#hamb-icon').addClass("hamb"); }
    else {
        { $('#hamb-icon').removeClass("hamb"); }
    }
}

function navClick() {

    if ($('.navText').hasClass("navTextAni") == false) { $('.navText').addClass("navTextAni"); }
    else {
        { $('.navText').removeClass("navTextAni"); }
    }
}


// 文字hover
$('.navInfo').hover(
    function () { $(this).addClass('ld ld-jingle') },
    function () { $(this).removeClass('ld ld-jingle') }
)

// 漢堡hover
$('#hamb-icon').hover(
    function () { $(this).addClass('ld ld-rubber-h') },
    function () { $(this).removeClass('ld ld-rubber-h') }
)







// ---------------版權頁----------------


$('.copyrightIcon').hover(
    function () { $(this).addClass('ld ld-beat') },
    function () { $(this).removeClass('ld ld-beat') }
)





// ---------------聯絡我----------------

// 整個大區塊
$('#formcontent').addClass('animate__animated animate__fadeInLeft');


// 按鈕
$('#submitBTN').hover(
    function () { $(this).addClass('ld ld-bounce') },
    function () { $(this).removeClass('ld ld-bounce') }
)


//------------------測試------------------------
