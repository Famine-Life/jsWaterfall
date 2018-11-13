    //添加点击事件
    function doFullScreen(imgs){
        var lens = imgs.length;
        for(var i = 0; i < lens; i++){
            imgs[i].onclick = function (event){
                event = event||window.event;
                var target = document.elementFromPoint(event.clientX, event.clientY);
                showBig(target.src);
                
            }
        }
    }
    
    //fullScreen组件
    var fullScreen = document.getElementById("fullScreen");
    var close_btn = document.getElementById("fullScreen_popup_close");
    //展示图片的input
    var img_show_url = document.getElementById("img_show_url");
    var markdownimg_show_url = document.getElementById("markdownimg_show_url");
    //获取关闭按钮
    var popup = document.getElementById("fullScreen_popup");
    //关闭按钮
    close_btn.onclick = function (){
        //console.log("clicked");
        popup.style.display = "none";
        close_btn.style.visibility="hidden";
    }
    //全屏展示图片
    function showBig(src){
        //展示close_btn
        close_btn.style.visibility="visible";
        //console.log(close_btn);
        popup.getElementsByTagName("img")[0].src = src;
        img_show_url.value=src;
        markdownimg_show_url.value="![markdown]("+src+")";     //markdown img
        //console.log(img_show_url.value);
        popup.style.display = "block";
    }
