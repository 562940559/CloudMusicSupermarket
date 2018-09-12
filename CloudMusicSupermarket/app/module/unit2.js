define(function(){
	var obj = {
		"name":"lisi",
		"say": function(){
			alert(this.name);
		}
	}
	return obj;
})