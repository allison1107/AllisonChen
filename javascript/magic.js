var canvas = document.querySelector('#myCanvas');

window.addEventListener('load', function () {
    // var canvas = document.querySelector('#myCanvas');

    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mouseup', mouseUp);

});
$(".magicOut").addClass('magicOutAni');
$("#magicOut_hole").addClass('magicOutAni');
$("#cardDrop").addClass('ld ld-wander-v');




// mouseDown

function mouseDown(e) {
    this.draw = true;
    this.ctx = this.getContext("2d");
    this.ctx.strokeStyle = '#FFFFFF';
    this.ctx.lineWidth = 8;

    var o = this;
    this.offsetX = this.offsetLeft;
    this.offsetY = this.offsetTop;

    while (o.offsetParent) {
        o = o.offsetParent;
        this.offsetX += o.offsetLeft;
        this.offsetY += o.offsetTop;
    }

    this.ctx.beginPath();
    this.ctx.moveTo(e.pageX - this.offsetX, e.pageY - this.offsetY);
}

function mouseMove(e) {
    if (this.draw) {
        this.ctx.lineTo(e.pageX - this.offsetX, e.pageY - this.offsetY);
        this.ctx.stroke();
    }
}

function mouseUp(e) {
    this.draw = false;
    var dataURL = canvas.toDataURL("image/png");
    // clearPad();
    drawing(dataURL);
    // $("#cardOut").css('background-image', 'url(dataURL)');
    $("#cardOut").css('background-position', 'center');
    $("#cardOut").css('background-size', 'cover');
    document.getElementById("cardBody").src = dataURL;
    document.getElementById("cardBackImg").src = dataURL;
    console.log(dataURL);
}


// 動畫
function drawing(dataURL) {


    $(".drawFrame").css('z-index', '-2');
    $("#drawBody").css('z-index', '-2');
    $(".magicOutHoleFrame").css('z-index', '200');
    $("#magicDoor100").css('z-index', '20');
    $("#magicDoor100").addClass()
    $("#DoorL").addClass('DoorLAni');
    $("#DoorR").addClass('DoorRAni');
    $(".holeFrame").addClass('holeDIspaly');
    // 魔法陣旋轉
    $(".drawCardPage").addClass('Door3DRotate');
    $(".drawCardPage").css('z-index', '-20');
    $(".magicOutHoleFrame").addClass('Door3DRotate');

    // 門打開
    $("#DoorL>div").addClass('DoorOpenL');
    $("#DoorR>div").addClass('DoorOpenR');

    // 卡片出現
    $(".cardFrame").addClass('cardAni');
    $(".cardPath").addClass('ld ld-wander-v');


    Drag();
}

function clearPad() {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);


}


function Drag() {

    $(document.body).addClass('cursorPoint');
    var box = document.getElementById('cardOut');
    var mx, my, //滑鼠位置
        ox, oy; //滑鼠按下的物件的位置
    var e = function (event) {
        if (!event) {
            event = window.event;
            event.target = event.srcElement;
            event.layerY = event.offsetY;
        }
        event.my = event.pageY || event.clientY + document.body.scrollTop;
        return event;
    };
    // 滑鼠按下
    document.onmousedown = function (event) {
        event = e(event);
        o = event.target;
        oy = parseInt(box.offsetTop);
        my = event.my;
        document.onmousemove = move;
        document.onmouseup = stop;
        $("#cardOut").addClass('cardShadow');


    };
    //移動
    function move(event) {
        event = e(event);
        var boxTop = oy + event.my - my;
        box.style.top = oy + event.my - my + 'px';
        // 滑到某處自動產生動畫 
        if (boxTop < -300) {
            $("#cardOut").addClass('animate__animated animate__backOutUp');
        } else if (boxTop > 0) {
            box.style.top = `${0}px`;
        }
        // console.log(boxTop);
    }
    //放開
    function stop(event) {
        $("#cardOut").removeClass('cardShadow');

        event = e(event);
        var boxTop = oy + event.my - my;
        // 放開動畫
        if (boxTop > -150) {
            box.style.top = `${0}px`;
            $("#cardOut").removeClass('animate__animated animate__backOutUp');
        } else {
            $("#cardOut").addClass('animate__animated animate__backOutUp');
        }
        // 放開
        o = document.onmousemove = document.onmouseup = null;



        if ($("#cardOut").hasClass('animate__animated animate__backOutUp') == true) {

            $("#cardDrop").css('z-index', '200');
            $(".cardFrame1").addClass('cardRotateClass');
            $(".cardFrame2").addClass('cardRotateClass');
            $(".cardTrans").addClass('cardDropClass');
            $(".drawFrame").addClass('canvasHidden');
            cardMouseMove();
        }
    }
}




function cardMouseMove() {
        var box1 = document.getElementById("cardMouse");
 
        //繫結滑鼠移動事件
        document.onmousemove = function (event) {

            event = event || window.event;

     
            var st = document.body.scrollTop || document.documentElement.scrollTop;
            var sl = document.body.scrollLeft || document.documentElement.scrollLeft;

            var left = event.clientX;
            var top = event.clientY;
    
            box1.style.transform = `translateX(${left * .02}px) translateY(${top * .02}px) rotate3d(${top * -.01} ,${left * .01},0,3deg)`;
    }


}


