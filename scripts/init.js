requirejs.config({
	"baseUrl": "scripts",
	"paths": {
		"jquery": "lib/jquery-2.1.3",
		"fancybox" : "lib/fancyBox/index",
		"lazypic"  : "lib/lazypic",
		"jssor" : "lib/jssor",
		"jssor.slider" : "lib/jssor.slider"
	} ,
	"shim" : {
		"jssor.slider" : ["jssor"]
	}
});

require(['brcm']);

define(function(){return "init-complete"});
