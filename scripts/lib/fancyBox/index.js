var base = "lib/fancybox/fancyapps-fancyBox-18d1712/source/";

var fancyboxModule = base + "jquery.fancybox";

var baseFile = "scripts/" + fancyboxModule;
var fancyboxJS = baseFile + ".js";
var fancyboxCSS = baseFile + ".css";


define("fancybox", 
	["jquery"],
	function($) {
		var scriptFile = fancyboxJS;
		var scriptRequest = $.ajax({
				url : scriptFile,
				dataType: 'script',
				async: false,
				cache: true
			}).always( function(script, status, data) {
			console.log("ajax.Script::status::"+status+":"+ scriptFile);
				if (status != "success")
					console.log(data);
			});
		
		var link = $("<link rel='stylesheet' type='text/css' />");
		$("head").append(link);
		link.attr('href',fancyboxCSS);
		
		return $.when(scriptRequest).then( function () {return "fancybox-installed"});
	}
);
