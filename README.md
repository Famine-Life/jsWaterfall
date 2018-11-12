
### 很抱歉，这里是 branch_img_isload 开发测试分支

正在思考 [jsWaterfall](https://blog.liantao.me/jsWaterfall/) 的初始页面加载的样式问题的解决方案

目前正在尝试使用 **图片是否加载完成** 的条件来确定是否显示图片，，但是目前未成功

END



=============

### js瀑布流 展示github图片

目前第一次进入页面有显示bug
我试图用图片加载完成后再显示图片来隐藏它，但是总有意想不到的现象出现，，就先这样着吧。

github的接口提供的图片在某一段区间内，会有两张相同的图片出现，导致有时候能看到两张相同的图片同时出现。


### 最简单的使用方法：

只需要ajax请求的url返回的json为这个格式：

{key:"图片地址",key:"图片地址2"}

即可

```javascript
var responseData = (function() {
            var result;
            $.ajax({
                type:'GET',
                url:'https://api.github.com/emojis',
                dataType:'json',
                data:{url:"http://github.com"},
                async:false,
                success:function(data){
                    result = data;
                },
                error: function(){
                    console.log("error");
                }
            });
            return result;
        })();
```

### 改造注意事项：

1. 由于js判断屏幕的宽度来确定列数，导致把图片展示的容器有时候，会有一些多余的空白区域使用不到；我试图把它居中处理，但是如果图片的宽度改变往往无法确定一个通用的width百分比值；这问题没有解决思路，先记下。

2. 由于是不定高度的，如果图片的高度特别小，当我们设定的初始化图片数量（50）加载完成，然后页面并没有达到滚动条出现的条件的话，无法触发加载图片的funciton，这个很尴尬，需要注意。
