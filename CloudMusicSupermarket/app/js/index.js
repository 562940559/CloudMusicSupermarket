//首先引入config
/*require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","tab","toast","template","url"],function($,tab,toast,template,url){
		//使用tab和toast完成两个模块的功能
		

		$.get( url.url +"/api/v1/login.php",function(data){
			var html = template("list",{data: data});
			$("#content").html(html);
		},"json");

	})
})*/

window.onload = function(){
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
	//		判断条栏的位置并进行fixed和absolute之间的切换
		window.onscroll = function (e) {
			e = e || window.event;
			var goto_top = document.getElementById("goto_top");
			var y = document.documentElement.scrollTop||document.body.scrollTop;
			if(y>653){
				goto_top.style.position = "fixed";
				goto_top.style.top = "50px";
			}else{
				goto_top.style.position = "absolute";
				goto_top.style.top = "653px";
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

