window.onload=function(){

			var wrap = document.getElementById('wrap'),
         pic = document.getElementById('pic'),
         list = document.getElementById('list').getElementsByTagName('li'),
         index = 0,
         timer = null;

     // 若果有在等待的定时器，则清掉
     if (timer) {
         clearInterval(timer);
         timer = null;
     }

     // 自动切换
     timer = setInterval(autoPlay, 3000);

     // 定义并调用自动播放函数
     function autoPlay() {
         index++;
         if (index >= list.length) {
             index = 0;
         }
         changeImg(index);
     }

     // 定义图片切换函数
     function changeImg(curIndex) {
         for (var j = 0; j < list.length; j++) {
             list[j].className = "";
         }
         // 改变当前显示索引
         list[curIndex].className = "on";
         pic.style.marginTop = -500 * curIndex + "px";
        //  pic.style.transitionDuration = 0.7+"s";
         index = curIndex;
     }

     // 鼠标划过整个容器时停止自动播放
     wrap.onmouseover = function() {
         clearInterval(timer);
     }

     // 鼠标离开整个容器时继续播放至下一张
     wrap.onmouseout = function() {
         timer = setInterval(autoPlay, 3000);
     }

     // 遍历所有数字导航实现划过切换至对应的图片
     for (var i = 0; i < list.length; i++) {
         list[i].id = i;
         list[i].onmouseover = function() {
             clearInterval(timer);
             changeImg(this.id 

);
         }
     }

	//   案例展示效果
	var oBox=document.getElementById('box');
	var oUl1=document.getElementById('ul1');
	var oLi1=oUl1.getElementsByTagName('li');
	var oUl2=document.getElementById('ul2');
	var oLi2=oUl2.getElementsByTagName('li');
	var oLi1Width=oLi1[0].offsetWidth;
	var timer=null;
	var time=null;
	var y=0;
	//alert(oLi1Width);
	oUl1.style.width=oLi1Width*oLi1.length+'px';    //给ul1一个宽度

	for(var i=0;i<oLi2.length;i++){
		//alert(i)
		oLi2[i].index=i;   //获取li2的索引
		oLi2[i].onmouseover=function(){
			show(this.index)
			// alert(this.index)
		}
	}

	oBox.onmouseover=function(){      //鼠标放上定时器停止
		clearInterval(time);
	}

	// oBox.onmouseout=function(){       //鼠标离开开启定时器
	// 	time=setInterval(function(){
	// 		show(y);
	// 		y++;
	// 		//alert(oLi2.length)
	// 		if(y==oLi2.length){y=0}    
	// 	},2000)
	// }

	clearInterval(time);
	// time=setInterval(function(){      //自动轮播
	// 	show(y);
	// 	y++;
	// 	//alert(oLi2.length)
	// 	if(y==oLi2.length){y=0}    //图片轮播结束，拽回第一个重新开始；
	// },2000)

	function show(j){         //鼠标放上li2对应的li运动并且li2对应的颜色改变
		for(var i=0;i<oLi2.length;i++){
				oLi2[i].className="";
			}
			oLi2[j].className="active";

			clearInterval(timer);
			timer=setInterval(function(){
				var iSpeed=(-oUl1.offsetLeft-oLi1Width*j)/6;     //缓冲运动
				var x=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				oUl1.style.left=x+oUl1.offsetLeft+'px';
			},22)
	}


}