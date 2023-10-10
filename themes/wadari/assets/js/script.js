// navbar function
$(function () {
	if (window.pageYOffset == 0) {
		$('.navbar').addClass('navbar-custom');
		$('.book-bottom').addClass('opacity-0');
		$('.dropdown-menu-option').addClass('dropdown');
	}
	$(window).scroll(function () {
		var top_offset = $(window).scrollTop();
		if (top_offset > 700) {
			$('.navbar').addClass('navbar-custom-top');
			$('.navbar').removeClass('navbar-custom');

			$('.book-bottom').removeClass('opacity-0');
			$('.book-bottom').addClass('opacity-100');

			$('.dropdown-menu-option').addClass('dropdown');
			$('.dropdown-menu-option').removeClass('dropup');
		} else {
			$('.navbar').removeClass('navbar-custom-top');
			$('.navbar').addClass('navbar-custom');

			$('.book-bottom').addClass('opacity-0');
			$('.book-bottom').removeClass('opacity-100');

			$('.dropdown-menu-option').removeClass('dropdown');
			$('.dropdown-menu-option').addClass('dropup');
		}
	});
});


// scroll top function
// Get the button
let mybutton = document.getElementById("myBtn");
let mybutton2 = document.querySelector(".btn-whatsapp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
		mybutton.style.opacity = "100%";
		mybutton2.style.opacity = "100%";
	} else {
		mybutton.style.opacity = "0%";
		mybutton2.style.opacity = "0%";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// slider 
$('.accommodation-slider').owlCarousel({
	loop:false,
	margin:50,
	nav:true,
	dots:false,
	responsive:{
		0:{
			items:1,
		},
		600:{
			items:2,
		},
		1000:{
			items:3,
		}
	}
})
$('.offers-slider').owlCarousel({
	loop:true,
	margin:5,
	responsive:{
		0:{
			items:1,
			nav:false,
			dots:false,
		},
		600:{
			items:1,
			nav:false,
			dots:false,
		},
		1000:{
			items:1,
			nav:false,
			dots:false,
		}
	}
})

$('.accommodation-img-slider').owlCarousel({
	loop:true,
	margin:50,
	responsive:{
		0:{
			items:1,
			nav:true,
			dots:true,
		},
		600:{
			items:1,
			nav:false,
			dots:true,
		},
		1000:{
			items:1,
			nav:true,
			dots:true,
		}
	}
})

$('.dealsoffers-slider').owlCarousel({
	loop:false,
	center:false,
	responsive:{
		0:{
			items:1,
			nav:false,
			dots:false,
		},
		600:{
			items:2,
			nav:false,
			dots:false,
		},
		1000:{
			items:1,
			nav:false,
			dots:false,
		}
	}
})

$('.news-slider').owlCarousel({
	loop:false,
	center:false,
	responsive:{
		0:{
			items:1,
			nav:false,
			dots:false,
		},
		600:{
			items:2,
			nav:false,
			dots:false,
		},
		1000:{
			items:4,
			nav:false,
			dots:true,
		}
	}
})

$('.ubud-treats-img-slider').owlCarousel({
	loop:true,
	margin:20,
	responsive:{
		0:{
			items:1,
			nav:false,
			dots:true,
		},
		600:{
			items:1,
			nav:false,
			dots:false,
		},
		1000:{
			items:1,
			nav:false,
			dots:true,
		}
	}
})

$('.popup-slider').owlCarousel({
	loop:true,
	nav: false,
	center: true,
	items: 1,
	dots: false,
	autoplay:true,
	autoplayTimeout:2000,
})
// end slider 