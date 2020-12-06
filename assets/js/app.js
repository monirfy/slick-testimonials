( function( $ ) {

	$('#year').text(new Date().getFullYear());

    $(document).ready(function(){
        
        // slick-testimonials 01
        
		$('.slick-testimonials1').slick({
			infinite: true,
			autoplay: false,
			arrows: true,
			pauseOnHover: false,
			autoplaySpeed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<div class="user-prev"><i class="fas fa-long-arrow-alt-left"></i></div>',
			nextArrow: '<div class="user-next"><i class="fas fa-long-arrow-alt-right"></i></div>',
			
		});
		
		 // slick-testimonials 02
		$('.slick-testimonials2').slick({
			infinite: true,
			autoplay: false,
			arrows: true,
			pauseOnHover: false,
			autoplaySpeed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<div class="user-prev"><i class="fas fa-long-arrow-alt-left"></i></div>',
			nextArrow: '<div class="user-next"><i class="fas fa-long-arrow-alt-right"></i></div>',
			
		});

		// slick-testimonials 05
		$('.slick-testimonials5').slick({
			infinite: true,
			autoplay: false,
			arrows: true,
			pauseOnHover: false,
			autoplaySpeed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<div class="js-prev"><i class="fas fa-angle-left"></i></div>',
			nextArrow: '<div class="js-next"><i class="fas fa-angle-right"></i></div>',
		
		});

		// slick-testimonials 06
		$('.slick-testimonials6').slick({
			infinite: true,
			dots: true,
			autoplay: false,
			arrows: true,
			pauseOnHover: false,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<div class="js-prev"><i class="fas fa-angle-left"></i></div>',
			nextArrow: '<div class="js-next"><i class="fas fa-angle-right"></i></div>',
		});
    });

} )( jQuery );