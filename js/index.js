window.onload = function () {
    $(".title7").css({
        "margin-top":"0px",
    });
    var hight = document.body.offsetHeight
    var oneVh = hight/100
    var h_title7 = document.getElementsByClassName("title7")[0].offsetHeight
    var l_hight = document.getElementsByClassName("lianxi")[0].offsetHeight
    $(".title7").css({
        "padding-top":( (hight - h_title7 - l_hight) / 2) + "px",
    });
}