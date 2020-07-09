$(".title0").css({
    "animation": "text 3s",
});
$(".text0").css({
    "animation": "text 3s",
});
$(".image0").css({
    "animation": "image 3s",
});
//重要！禁止移动端滑动的默认事件
document.body.addEventListener('touchmove', function (event) {
    event = event ? event : window.event;
    if (event.preventDefault) {
        event.preventDefault()
    } else {
        event.returnValue = false
    }
}, false)
var pages = function (obj) {
    var box = document.getElementById(obj.wrap);
    var box2 = document.getElementById(obj.wrap2);
    var len = obj.len;
    var n = obj.n;
    var startY, moveY, cliH;
    //获取屏幕高度
    var getH = function () {
        cliH = document.body.clientHeight
    };
    getH();
    window.addEventListener('resize', getH, false);
    //touchStart
    var touchstart = function (event) {
        if (!event.touches.length) {
            return;
        }
        startY = event.touches[0].pageY;
        moveY = 0;
    };
    //touchMove
    var touchmove = function (event) {
        if (!event.touches.length) {
            return;
        }
        moveY = event.touches[0].pageY - startY;
        box2.style.transform = 'translateY(' + (-n * cliH + moveY) + 'px)'; //根据手指的位置移动页面
    };
    //touchEnd
    var touchend = function (event) {
        let after = n;
        //位移小于+-50的不翻页
        if (moveY < -50) n++;
        if (moveY > 50) n--;
        //最后&最前页控制
        if (n < 0) n = 0;
        if (n > len - 1) n = len - 1;
        //重定位
        box2.style.transform = 'translateY(' + (-n * 10) + '%)'; //根据百分比位置移动页面
        if(after != n){
            $(".title"+n).css({
                "animation": "text 3s",
            });
            $(".text"+n).css({
                "animation": "text 3s",
            });
            $(".image"+n).css({
                "animation": "image 3s",
            });
            $(".title"+after).css({
                "animation": "",
            });
            $(".text"+after).css({
                "animation": "",
            });
            $(".image"+after).css({
                "animation": "",
            });
        }       
    };
    //touch事件绑定
    box.addEventListener("touchstart", function (event) {
        touchstart(event)
    }, false);
    box.addEventListener("touchmove", function (event) {
        touchmove(event)
    }, false);
    box.addEventListener("touchend", function (event) {
        touchend(event)
    }, false);
};
pages({
    wrap: 'wrap', //.wrap的id
    wrap2: 'wrap2', //.wrap2的id
    len: (function () {
        return document.getElementById("wrap2").getElementsByClassName("page").length
    }()),
    n: 0, //页面一打开默认在第几页？第一页就是0，第二页就是1
});