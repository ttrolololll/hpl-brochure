$(document).ready(function() {
	
	/* **************************
	// GLOBAL
	************************** */
	
	// Fade in out page
	$('body').css('display', 'none');
	$('body').fadeIn(2000);
	$('header').css('display', 'none');
	$('header').delay(2000).fadeIn(2000);
	
	// Redirects page when a link is clicked
	$('a').click(function(event) {
		event.preventDefault();
		linkLocation = this.href;
		$('header').fadeOut(1000);
		$('body').fadeOut(1000, redirectPage);
		$.vegas('destroy');
		$.vegas('stop');
	});
	
	function redirectPage() {
		window.location = linkLocation;
	}
	
	/* **************************
	// TOP NAVIGATION
	************************** */
	
	// Top Navigation BG overlay
	$('#nav-top ul li a').append('<span class="nav-top-rest"></span>');
	$('#nav-top ul li a').append('<span class="nav-top-hover"></span>');
	
	// Fade in / out effect for top navigation
	$('#nav-top ul li a').hover(
		function() {
			$(this).children('.nav-top-rest').stop().animate({'opacity': 0}, 700);
			$(this).children('.nav-top-hover').stop().animate({'opacity': 1}, 700);
		},
		function() {
			$(this).children('.nav-top-rest').stop().animate({'opacity': 1}, 700);
			$(this).children('.nav-top-hover').stop().animate({'opacity': 0}, 700);
		}
	);
	
	// Displays Sub-navigation when mouse hovers (NOT IN USE)
	$('#nav-top li ul').css('display', 'none');
	
	$('#nav-top li').has('ul').hover(
		function() {
			$(this).children('ul').fadeIn(700);
		},
		function() {
			$(this).children('ul').stop(true, true).fadeOut(300);
		}
	);
	
	/* **************************
	// CATEGORY LANDING PAGES
	************************** */
	
	// Hide contents and displays them in sequence
	$('.prop-col-1').hide();
	$('.prop-col-2 nav ul#nav-prop li').hide().delay(3000);
	
	$.each( $( '.prop-col-2 nav ul#nav-prop li' ), function( i, link ) {
		$( link ).delay( i * 50 ).fadeIn( 2000 );
	});
	
	$('.prop-col-1').delay(2500).fadeIn(1000);
	
	/* **************************
	// CATEGORY INSIDE PAGES
	************************** */
	
	// Hide contents and displays them in sequence
	$('#prop-inside article').hide();
	$('.prop-inside-wrap').hide();
	$('#prop-inside article').delay(2000).fadeIn(2000);
	$('.prop-inside-wrap').delay(2000).fadeIn(5000);
	
	$('#prop-inside ul').css({'width': '90%'});
	$('.prop-inside-more').hide();
	
	// show / hide Read More section
	$('.readmore').click(function() {
		$('.prop-inside-more').slideToggle(1000);
	});
	
	// hides nav from screen
	$('#prop-inside-nav').css({'margin-right': '-320px'});
	
	// show / hide nav when button clicked
	$('#slide-nav').toggle(
		function() {
			$('#prop-inside-nav').animate({'margin-right': '0'}, 1000);
		},
		function() {
			$('#prop-inside-nav').animate({'margin-right': '-320'}, 1000);
		}
	);
	
	// animate button fade in
	$('#slide-nav').hide();
	$('#slide-nav').delay(2000).fadeIn(2000);
	
	// toggle nav button
	$('#slide-nav').toggle(
		function() {
			$(this).css({'background': 'url(../images/minus.png)'});
			$(this).hover(
				function() {
					$(this).css({'background': 'url(../images/minus-hover.png)'});
				},
				function() {
					$(this).css({'background': 'url(../images/minus.png)'});
				}
			);
		},
		function() {
			$(this).css({'background': 'url(../images/plus.png)'});
			$(this).hover(
				function() {
					$(this).css({'background': 'url(../images/plus-hover.png)'});
				},
				function() {
					$(this).css({'background': 'url(../images/plus.png)'});
				}
			);
		}
	);
	
	// toggle Read More botton
	$('.readmore').toggle(
		function() {
			$('#readmore-img').css({'background': 'url(../images/read-col.png) no-repeat'});
			$('.readmore').hover(
				function() {
					$('#readmore-img').css({'background': 'url(../images/read-col-hover.png) no-repeat'});
				},
				function() {
					$('#readmore-img').css({'background': 'url(../images/read-col.png) no-repeat'});
				}
			);
		},
		function() {
			$('#readmore-img').css({'background': 'url(../images/readmore.png) no-repeat'});
			$('.readmore').hover(
				function() {
					$('#readmore-img').css({'background': 'url(../images/readmore-hover.png) no-repeat'});
				},
				function() {
					$('#readmore-img').css({'background': 'url(../images/readmore.png) no-repeat'});
				}
			);
		}
	);
	
});