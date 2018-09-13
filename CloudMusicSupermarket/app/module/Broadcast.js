define(function(){
	function Broadcast(){
		this.init();
	}
	Broadcast.prototype = {
		constructor:Broadcast,
		init:function(){
			this.box = $("#banner");
			this.ul = $("#banner ul");
			this.aLi = $('#banner ul li');
			this.ol = $("#banner ol");
			this.aBtn = $("#banner ol li");
			this.goPrev = $("#goPrev");
			this.goNext = $("#goNext");
			this.index = 0;
			this.flag = false;
			this.timer = null;
		},
		lunbo:function(){
			var _this = this;
			_this.aBtn.on("click",function(){
				if(!_this.flag){
					//动画开始了
					_this.flag = true;
					//自己改变样式
					$(this).addClass("ac").siblings().removeClass("ac");
					//切换图片
					_this.aLi.eq(_this.index).stop().fadeOut(1000);
					_this.index = $(this).index();
					_this.aLi.eq(_this.index).stop().fadeIn(1000,function(){
						_this.flag = false;
					});
				}	
			})
			_this.goPrev.on("click",function(){
				if(!_this.flag){
					_this.flag = true;
					_this.aLi.eq(_this.index).stop().fadeOut(1000);
					_this.index--;
					if(_this.index < 0) _this.index = _this.aLi.length -1;
					_this.aBtn.eq(_this.index).addClass("ac").siblings().removeClass("ac");
					_this.aLi.eq(_this.index).stop().fadeIn(1000,function(){
						_this.flag = false;
					});
				}
			})
			_this.goNext.on("click",function(){
				if(!_this.flag){
					_this.flag = true;
					_this.aLi.eq(_this.index).stop().fadeOut(1000);
					_this.index++;
					if(_this.index > _this.aLi.length-1) _this.index = 0;
					_this.aBtn.eq(_this.index).addClass("ac").siblings().removeClass("ac");
					_this.aLi.eq(_this.index).stop().fadeIn(1000,function(){
						_this.flag = false;
					});
				}
			})
			function auto(){
				_this.timer = setInterval(function(){
					//trigger触发事件的意思
					_this.goNext.trigger("click");
				},3000);
			}
			auto();
			$("#banner").hover(function(){
				clearInterval(_this.timer);
			},auto);
		}
	}
	return new Broadcast();
})




	