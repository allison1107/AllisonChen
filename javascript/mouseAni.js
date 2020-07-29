/*
     *使div可以跟隨滑鼠移動
     * */
window.onload = function () {

    //獲取box1
    var box1 = document.getElementById("indexRight_Pic02");
    var box2 = document.getElementById("indexRight_Pic");
    var box3 = document.getElementById("About_L_Inner");

    // setInterval(function(){ alert("Hello"); }, 3000);   


    //繫結滑鼠移動事件
    document.onmousemove = function (event) {
        //解決相容問題
        event = event || window.event;

        //獲取滾動滾動的距離。
        //chrome認為滾動條是body。
        //火狐等認為是瀏覽器的滾動條是html的。
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        var sl = document.body.scrollLeft || document.documentElement.scrollLeft;

        // console.log(st);



        //獲取到滑鼠的座標
        //用於獲取滑鼠在當前的可見視窗的座標
        var left = event.clientX;
        var top = event.clientY;


        box1.style.clipPath = `circle(${25}% at ${left - 800}px ${top * 0.1}%)`;
        box2.style.transform = `translateX(${left * .02}px) translateY(${top * .02}px) rotate3d(${top * -.01} ,${left * .01},0,3deg)`;
        // box2.style.transform = `rotate3d(${left * .01}deg) rotateX(${top * .01}deg)`;
        // box1.style.top = (top) * 1 + "px";


        // 介紹圖
        box3.style.clipPath = `inset(${top * 0.08}%  0% ${top * 0.08}% 0%)`;
    }


}






