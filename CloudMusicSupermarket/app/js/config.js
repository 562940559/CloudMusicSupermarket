require.config({
	baseUrl: "/",
	paths:{
		"jquery":"libs/jquery-1.12.4",
		"Broadcast":"module/Broadcast",
		"login_change":"module/login_change",
		"gotoTop":"module/gotoTop",
		"changeBig":"module/changeBig"
	},
	shim: {
		Broadcast:{
			deps:["jquery"]
		}
	}
});