$(function(){
    /*轮播图*/
    /*1. 自动轮播图 无缝*/
    /*2. 点对应改变*/
    /*3. 手势切换*/
//获取元素
    var $banner=$('.sn_banner');
    var width=$banner.width();
    var $imgBox=$banner.find('ul:first');
    var $point = $banner.find('ul:last');
//    自动轮播
    var index =1;
    var animateFun=function(){
        $imgBox.animate({'transform':'translateX('+ (-index*width)+'px)'},200,function(){
            if(index >=9){
                index=1;
                $imgBox.css({'transform':'translateX('+(-index *width)+'px)'});
            }else if(index<=0){
                index=8;
                $imgBox.css({'transform':'translateX('+(-index *width)+'px)'});

            }
        })
      //小点点
        $point.find('li').removeClass('now').eq(index-1).addClass('now');
    }
    var timer=setInterval(function(){
        index++;
        animateFun();

},5000);
//   手势的改变
    $imgBox.on('swipeLeft',function(){
    //    下一张
        index++;
        animateFun();

    });
    $imgBox.on('swipeRight',function(){
    //    上一张
        index--;
        animateFun();
    })
})