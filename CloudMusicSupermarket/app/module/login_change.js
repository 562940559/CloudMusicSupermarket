define(function(){
	function Change(){
		this.init();
	}
	Change.prototype = {
		constructor:Change,
		init:function(){
			this.login_btn = document.getElementById("login_btn"),
			this.sel_login = document.getElementById("select_login")
		},
		bian:function(){
			var _this = this;
			_this.login_btn.onmouseenter = function(){
				_this.sel_login.style.display = "block";
			}
			_this.login_btn.onmouseleave = function(){
				_this.sel_login.style.display = "";
			}
			_this.sel_login.onmouseenter = function(){
				_this.sel_login.style.display = "block"
			}
			_this.sel_login.onmouseleave = function(){
				_this.sel_login.style.display = "";
			}
		}
	}
	return new Change();
})