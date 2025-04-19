(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});
    /*======================================
Sidebar Toggle
========================================*/
$(".offcanvas-close,.offcanvas-overlay").on("click", function () {
	$(".offcanvas-area").removeClass("info-open");
	$(".offcanvas-overlay").removeClass("overlay-open");
});
$(".sidebar-toggle").on("click", function () {
	$(".offcanvas-area").addClass("info-open");
	$(".offcanvas-overlay").addClass("overlay-open");
});



// data-background
$("[data-background]").each(function (){
	$(this).css("background-image","url("+ $(this).attr("data-background") + ")")
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 500) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});
// preloader js
$(window).load(function() {
	$("#loading").delay(2000).fadeOut(500);
	$("#loading").fadeOut(500);
})



// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: true,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 990, settings: { dots: false, arrows: false } },
			{ breakpoint: 990, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();
// slick slider brand
$('.brand-active').slick({
	slidesToShow: 5,
	slidesToScroll: 3,
	arrows: false,
	responsive: [
	  {
		breakpoint: 1300,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: false,
		}
	  },
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: false,
		}
	  },
	  {
		breakpoint: 700,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	 
	]
  });
//   gellary

$('.galllary-active').slick({
	centerMode: true,
	centerPadding: '550px',
	centerMode: true,
	slidesToShow: 1,
	arrows: false,
        prevArrow: '<span class="prev"><i class="fa-solid fa-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa-solid fa-arrow-right"></i></span>',
	responsive: [
	  {
		breakpoint: 1300,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 3,
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: false,
		  centerPadding: '0px',
		  slidesToShow: 1,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  });
//   slick slider employe
$('.employe-slider-active').slick({
	
	infinite: true,
	
	slidesToShow: 3,
	slidesToScroll: 4,
	arrows: true,
        prevArrow: '<span class="prev"><i class="fa-solid fa-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa-solid fa-arrow-right"></i></span>',
	responsive: [
	  {
		breakpoint: 1300,
		settings: {
		  slidesToShow: 3,
		  infinite: true,
		  dots: false,
		}
	  },
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 2,
		  infinite: true,
		  dots: false,
		  
		}
	  },
	  {
		breakpoint: 700,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });				  
//   sponsor slider
$('.sponsor-active').slick({
	
	slidesToShow: 5,
	arrows:false,
	responsive: [
	  {
		breakpoint: 1300,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '0px ',
		  slidesToShow: 3,
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 3,
		}
	  },
	  {
		breakpoint: 580,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 2,
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 2,
		}
	  }
	]
  });

// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})
// contact page nice select
$('.select').niceSelect();


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
// counterUp
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa-solid fa-angles-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);
// swiper slider client 
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	grabCursor: true,
	loop: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  });
//   sidebar menu
  function showSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display ="flex"
  }
  function hideSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display ="none"
  }

