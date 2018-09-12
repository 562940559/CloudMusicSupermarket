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
}

