define(function(){
	function ChangeBig(){
		this.init();
	}
	ChangeBig.prototype = {
		constructor:ChangeBig,
		init:function(){
			this.box = document.getElementById("box"),
			this.span = document.getElementById("zoom"),
			this.bigimg = document.getElementById("bigimg")
		},
		BianBig:function(){
			var _this = this;
			function $tag(tagName,parent){
				var parent = parent || document;
				return parent.getElementsByTagName(tagName);
			};
			var img = $tag("img",_this.bigimg)[0];
			_this.box.onmousemove = function(e){
				e = e || window.event;
				_this.span.style.display = "block";
				_this.bigimg.style.display = "block";
				var y = document.documentElement.scrollTop||document.body.scrollTop;
				//计算span的坐标
				var left = e.clientX - _this.box.offsetLeft - _this.span.offsetWidth/2,
					top = e.clientY - _this.box.offsetTop - _this.span.offsetHeight/2 + y;
				
				if(left < 0) left = 0;
				if(top < 0) top = 0;
				if(left > _this.box.offsetWidth - _this.span.offsetWidth) left = _this.box.offsetWidth - _this.span.offsetWidth;
				if(top > _this.box.offsetHeight - _this.span.offsetHeight) top = _this.box.offsetHeight - _this.span.offsetHeight;
				
				img.style.left = -2 * left + "px";
				img.style.top = -2 * top + "px";
				
				_this.span.style.left = left + 'px';
				_this.span.style.top = top + "px";
				
			}
			_this.box.onmouseleave = function(){
				_this.span.style.display = _this.bigimg.style.display = "none";
			}
		}
	}
	return new ChangeBig();
})