$.fn.ImgZoomIn = function() {
    bgstr = '<div id="ImgZoomInBG" style=" background:#000000; filter:Alpha(Opacity=70); opacity:0.7; position:fixed; left:0; top:0; z-index:10000; width:100%; height:100%; display:none;"><iframe src="about:blank" frameborder="5px" scrolling="yes" style="width:100%; height:100%;"></iframe></div>';
    //alert($(this).attr('src'));
    imgstr = '<img id="ImgZoomInImage" src="' + $(this).attr('src') + '" onclick=$(\'#ImgZoomInImage\').hide();$(\'#ImgZoomInBG\').hide(); style="cursor:pointer; display:none; position:absolute; z-index:10001;" />';
    if ($('#ImgZoomInBG').length < 1) {
        $('body').append(bgstr);
    }
    if ($('#ImgZoomInImage').length < 1) {
        $('body').append(imgstr);
    } else {
        $('#ImgZoomInImage').attr('src', $(this).attr('src'));
    }
    //alert($(window).scrollLeft());
    //alert( $(window).scrollTop());
    $('#ImgZoomInImage').css('left', $(window).scrollLeft() + ($(window).width() - $('#ImgZoomInImage').width()) / 2);
    $('#ImgZoomInImage').css('top', $(window).scrollTop() + ($(window).height() - $('#ImgZoomInImage').height()) / 2);
    $('#ImgZoomInBG').show();
    $('#ImgZoomInImage').show();
};