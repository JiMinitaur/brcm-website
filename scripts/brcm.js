
define("brcm.fancy",
	["jquery", "fancybox", "brcm.lazypic"],
	function($) {
		console.log("brcm.fancybox()");
		
		var images = $("div.fancy img, img.fancy");
		images.wrap(function(){
			console.log("fancify: " + this.outerHTML);
			var anchor = $("<a class='fancy-link'></a>");
			anchor.attr('rel', 'gallery');
			var href = $(this).attr('src');
			anchor = anchor.attr('href', href);
			return anchor;
		});
		
		$(".home .fancy-link").attr('rel', 'scrapyard');
		$(".fancy-link").fancybox();	
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

define("brcm.lazypic",["jquery", "lazypic"],
	function($) {
		console.log("brcm.lazypic()")
		
		var count = 0;
		$("img").each(function(index, element) {
			var state = imgLoadState(this);
			if (state.checks.isReady())
				state.queue().done(function() {
				console.log("image-loaded: " + element.outerHTML);
			});
			count++;
		})
		
		for (var i = 0; i < count; i++)
			imgLoadNext()
	}
)

require([ "brcm.navigation", "brcm.fancy", "brcm.lazypic"]);
