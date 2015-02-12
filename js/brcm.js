$(function() {
	/* Tie navigation to nav-section */
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
		element = $(event.delegateTarget);
		if (element.hasClass("gallery")) {
				element.smoothDivScroll({autoScrollingMode: "onStart"})
		}
	}
	
	$(".nav-section").bind("active", active);
	
	
	function processGallery(data,status) {
		alert(data)
	}
	
	/*
	alert('request');
	$.get({
		url:'gallery/gallery.html'
	}).done(processGallery);
	
	*/
	
	//$(".nav-section").fancyBox();
});