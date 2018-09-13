require(['config'],function(){
	require(['Broadcast','login_change','gotoTop'],function(Broadcast,Change,gotoTop){
		Broadcast.lunbo();
		Change.bian();
		gotoTop.GoTop();
		window.onscroll = function(e){
			e = e || window.event;
			gotoTop.GoTopPosition1();
		}
	})
})


