
define("brcm.fancy",
	["jquery", "fancybox"],
	function($) {
		console.log("brcm.fancybox()");
		
		var images = $("div.fancy img, img.fancy");
		images.wrap(function(){
			var anchor = $("<a class='fancy-link'></a>");
			var href = $(this).attr('src');
			anchor = anchor.attr('href', href);
			return anchor;
		});
		$(".fancy-link").attr('rel', 'gallery').fancybox();	
	}
);

define("brcm.navigation",
	["jquery"],
	function($) {
		console.log("brcm.navigation()");
		$(".navigation ul li").click(function(event) {
			event_target = $(event.delegateTarget)
			var id = event_target.data('nav-section');
			$(".nav-section").each(function(index, element) {
				element = $(element)
				if(element.hasClass(id)) {
					element.addClass("active")
					element.trigger("active")
				}
				else
					element.removeClass("active")
			});
		});
	
		function active(event) {
			element = $(event.delegateTarget)
			if (element.hasClass("gallery")) {
					//element.smoothDivScroll({autoScrollingMode: "onStart"})
			}
		}
		
		$(".nav-section").bind("active", active);
	
	}
);

require([ "brcm.navigation", "brcm.fancy"]);
