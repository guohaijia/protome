$(function(){
    /*�ֲ�ͼ*/
    /*1. �Զ��ֲ�ͼ �޷�*/
    /*2. ���Ӧ�ı�*/
    /*3. �����л�*/
//��ȡԪ��
    var $banner=$('.sn_banner');
    var width=$banner.width();
    var $imgBox=$banner.find('ul:first');
    var $point = $banner.find('ul:last');
//    �Զ��ֲ�
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
      //С���
        $point.find('li').removeClass('now').eq(index-1).addClass('now');
    }
    var timer=setInterval(function(){
        index++;
        animateFun();

},5000);
//   ���Ƶĸı�
    $imgBox.on('swipeLeft',function(){
    //    ��һ��
        index++;
        animateFun();

    });
    $imgBox.on('swipeRight',function(){
    //    ��һ��
        index--;
        animateFun();
    })
})