
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
			$(".nav-section").slideUp()
			.each(function(index, element) {
				element = $(element)
				if(element.hasClass(id)) {
					element
					.slideDown()
					.trigger("active")
				}
				else
					element.removeClass("active")
			});
		});
	
		function active(event) {
			element = $(event.target)
			if (element.hasClass("gallery")) {
				var offset = $('#slider').offset()
				if (offset) {
					$(document).scrollTop(offset.top)
					console.log("scroll("+offset.top+")")
				}
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

define("brcm.jssor", ["jquery", "jssor.slider"], 
function() {
	console.log("brcm.jssor()")
	
	var options = { 
		$AutoPlay : true ,
		$FillMode : 1,
		$AutoPlayInterval : 5000,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
			$ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
			$AutoCenter: 2,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
			$Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
		},
		$SlideshowOptions : {
			$Class: $JssorSlideshowRunner$,
			$Transitions: [{$Duration:700,$Opacity:2,$Brother:{$Duration:1000,$Opacity:2}}]
		}
	
	}
	var slider = new $JssorSlider$('slider', options);
	
	function ScaleSlider() {
		var parentWidth = $('#slider').parent().width();
		if (parentWidth > 400) {
			slider.$ScaleWidth(parentWidth - 200);
		}
		else
			window.setTimeout(ScaleSlider, 30);
	}
	
	$(window)
	.bind("load", ScaleSlider)
	.bind("resize", ScaleSlider)
	.bind("orientationchange", ScaleSlider)
	
})

require([ "brcm.navigation", "brcm.fancy", "brcm.lazypic"]);

require(["brcm.jssor"])
