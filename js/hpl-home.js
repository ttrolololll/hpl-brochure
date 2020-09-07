// Background slides for home page
$.vegas('slideshow', {
	delay: 4000,
	preload: true,
	step: 0,
	walk: function(step) { // stops slideshow when it reaches the end
		if (step == 9) { // index starts from 0
			$.vegas('stop');
		}
	},
	backgrounds:[
		{ src:'images/end-slide.jpg', fade:2000 },
		{ src:'images/2.jpg', fade:2000 },
		{ src:'images/5.jpg', fade:2000 },
		{ src:'images/7.jpg', fade:2000 },
		{ src:'images/3.jpg', fade:2000 },
		{ src:'images/4.jpg', fade:2000 },
		{ src:'images/9.jpg', fade:2000 },
		{ src:'images/h-man-ori-prague-8.jpg', fade:2000 },
		{ src:'images/p-tomlinson-heights-1.jpg', fade:2000 },
		{ src:'images/p-the-interlace-2.jpg', fade:2000 }
	]
})
	
$(document).ready(function() {
	
	// Auto redirect page to sitemap.html after 41.5 seconds
	window.setTimeout(function() {
		$('body').fadeOut(2000, function() {window.location = 'pages/sitemap.html';});
		$.vegas('destroy');
		$.vegas('stop');
	}, 41500);
	
	
	// Adjust text placement, always center of screen
	var a = $(window).height();
	var b = (a/2)-30;
	$('#frame1 h1').css('margin-top', b);
	$(window).resize(function() {
		var a = $(window).height();
		var b = (a/2)-30;
		$('#frame1 h1').css('margin-top', b);
	});
	
	// Hides page contents and displays them in sequence
	$('#frame1').hide();
	$('#frame4').hide();
	$('#hpl-logo').hide();
	
	$('#black-overlay').delay(28000).animate({opacity: 1}, 2000);
	
	$('#frame1').delay(1000).fadeIn(2000).delay(9000).fadeOut(2000);
	$('#frame4').delay(28000).fadeIn(2000).delay(8500);
	$('#hpl-logo').delay(32000).fadeIn(2000);
	
});