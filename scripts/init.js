requirejs.config({
	"baseUrl": "scripts",
	"paths": {
		"jquery": "lib/jquery-2.1.3",
		"fancybox" : "lib/fancyBox/index",
		"lazypic"  : "lib/lazypic"
	}
});

require(['brcm']);

define(function(){return "init-complete"});
