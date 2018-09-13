define(function(){
	function gotoTop(){
		this.init();
	}
	gotoTop.prototype = {
		constructor:gotoTop,
		init:function(){
			this.goto_top = document.getElementById("goto_top"),
			this.totop = document.getElementById("btn_top"),
			this.target = 0,
			this.btn_top = document.getElementById("btn_top")
		},
		GoTop:function(){
			var _this = this;
			_this.totop.onclick = function () {
			    clearInterval(timer);
			    var timer = setInterval(function () {
			        _this.target = document.body.scrollTop || document.documentElement.scrollTop;
			        _this.target -= Math.ceil(_this.target/10);
			        window.scrollTo(0, _this.target);
			        if (_this.target == 0) {
			            clearInterval(timer);
			        }
			    }, 10);
			}		
		},
		GoTopPosition1:function(){
			var y = document.documentElement.scrollTop||document.body.scrollTop;
			if(y>653){
				this.goto_top.style.position = "fixed";
				this.goto_top.style.top = "50px";
			}else{
				this.goto_top.style.position = "absolute";
				this.goto_top.style.top = "653px";
			}
		},
		GoTopPosition2:function(){
			var y = document.documentElement.scrollTop||document.body.scrollTop;
			if(y>353){
				this.goto_top.style.position = "fixed";
				this.goto_top.style.top = "50px";
				this.btn_top.style.display = "inline-block";
				this.goto_top.style.height = "277px";
			}else{
				this.goto_top.style.position = "absolute";
				this.goto_top.style.top = "353px";
				this.btn_top.style.display = "none";
				this.goto_top.style.height = "242px";
			}
		}
	}
	return new gotoTop();
})
