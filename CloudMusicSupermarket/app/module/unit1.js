define(function(){
	var obj = {
		"name":"zhangsan",
		"say": function(){
			alert(this.name);
		}
	}
	return obj;
})