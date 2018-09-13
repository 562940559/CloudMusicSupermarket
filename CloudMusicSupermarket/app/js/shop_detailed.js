/*window.onload = function(){
	var login_btn = document.getElementById("login_btn");
	var sel_login = document.getElementById("select_login");
	login_btn.onmouseenter = function(){
		sel_login.style.display = "block";
	}
	login_btn.onmouseleave = function(){
		sel_login.style.display = "";
	}
	sel_login.onmouseenter = function(){
		sel_login.style.display = "block"
	}
	sel_login.onmouseleave = function(){
		sel_login.style.display = "";
	}
function $tag(tagName,parent){
	var parent = parent || document;
	return parent.getElementsByTagName(tagName);
}
var box = document.getElementById("box"),
	span = document.getElementById("zoom"),
	bigimg = document.getElementById("bigimg"),
	img = $tag("img",bigimg)[0];
			//鼠标进入box
			box.onmousemove = function(e){
				e = e || window.event;
//				span.style.cursor = move;
				span.style.display = "block";
				bigimg.style.display = "block";
				var y = document.documentElement.scrollTop||document.body.scrollTop;
				//计算span的坐标
				var left = e.clientX - box.offsetLeft - span.offsetWidth/2,
					top = e.clientY - box.offsetTop - span.offsetHeight/2 + y;
				
				if(left < 0) left = 0;
				if(top < 0) top = 0;
				if(left > box.offsetWidth - span.offsetWidth) left = box.offsetWidth - span.offsetWidth;
				if(top > box.offsetHeight - span.offsetHeight) top = box.offsetHeight - span.offsetHeight;
				
				img.style.left = -2 * left + "px";
				img.style.top = -2 * top + "px";
				
				span.style.left = left + 'px';
				span.style.top = top + "px";
				
			}
			box.onmouseleave = function(){
				span.style.display = bigimg.style.display = "none";
			}
	//		判断条栏的位置并进行fixed和absolute之间的切换
		window.onscroll = function (e) {
			e = e || window.event;
			var goto_top = document.getElementById("goto_top");
			var btn_top = document.getElementById("btn_top");
			var y = document.documentElement.scrollTop||document.body.scrollTop;
			if(y>353){
				goto_top.style.position = "fixed";
				goto_top.style.top = "50px";
				btn_top.style.display = "inline-block";
				goto_top.style.height = "277px";
			}else{
				goto_top.style.position = "absolute";
				goto_top.style.top = "353px";
				btn_top.style.display = "none";
				goto_top.style.height = "242px";
			}
		}
//		点击按钮之后进行先加速后减速的回到顶部的运动
		var totop = document.getElementById("btn_top");
		var target = 0;
		totop.onclick = function () {
		    clearInterval(timer);
		    var timer = setInterval(function () {
		        target = document.body.scrollTop || document.documentElement.scrollTop;
		        target -= Math.ceil(target/10);
		        window.scrollTo(0, target);
		        if (target == 0) {
		            clearInterval(timer);
		        }
		    }, 10);
		};

}
			
*/


require(['config'],function(){
	require(['Broadcast','login_change','gotoTop','changeBig'],function(Broadcast,Change,gotoTop,changeBig){
		Broadcast.lunbo();
		Change.bian();
		gotoTop.GoTop();
		window.onscroll = function(e){
			e = e || window.event;
			gotoTop.GoTopPosition2();
		};
		changeBig.BianBig();
	})
})


