$( document ).ready(function() {
	AOS.init();
	
	if($(".btn-top").length){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".btn-top").fadeIn(400);
			} else {
				$(".btn-top").fadeOut(400);
			}
		});
		$(".btn-top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			});
		});
	}		
	
	
	if($('.show_search').length){
		$(".show_search").click(function() {
            $('.div_cart_gr').removeClass("Show");
            $('.div_login_signup').removeClass("Show");
			if($('.div_input_search').hasClass("Show")){
				$('.div_input_search').removeClass("Show");
				
			}
			else{
			    $('.div_input_search').addClass("Show");
			    $('#searchKeyword').focus();
				
			}
		});
		$(".close_search").click(function() {
			$('.div_input_search').removeClass("Show");
			
		});
	}
	
	if($('.ico_cart').length){
		$(".ico_cart").click(function() {
            $('.div_input_search').removeClass("Show");
            $('.div_login_signup').removeClass("Show");
			if($('.div_cart_gr').hasClass("Show")){
				$('.div_cart_gr').removeClass("Show");
			}
			else{
				$('.div_cart_gr').addClass("Show");				
			}
			
		});
	}
	
    if($('.ico_avatar').length){
		$('.div_login_signup').removeClass("Show");
		$(".ico_avatar").click(function() {
            $('.div_input_search').removeClass("Show");
            $('.div_cart_gr').removeClass("Show");
			if($('.div_login_signup').hasClass("Show")){

				$('.div_login_signup').removeClass("Show");
				
			}
			else{
				$('.div_login_signup').addClass("Show");
				
			}
			
		});
	}
	
	$('.navbar-toggle').click(function() {
		$('.div_login_signup').removeClass("Show");
	});
	
	
	var scroll = $(window).scrollTop();
	if (scroll >= 157) {
		$(".HeaderPage").addClass("scaleheader");
	}
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 157) {
			$(".HeaderPage").addClass("scaleheader");
		}
		else{$(".HeaderPage").removeClass("scaleheader");}
	});
	
	$( ".par" ).hover(
	  function() {
		$( this ).addClass( "hover" );
		if($( ".par" ).hasClass('active') == true){
			$('.par.active').addClass('disable');
		}  
	  }, function() {
		$( this ).removeClass( "hover" );
		  $('.par.active').removeClass('disable');
	  }
	);
	
	var swiper = new Swiper('.swiper-container.carousel', {
        pagination: '.carousel-pagination',
        paginationClickable: true,
        spaceBetween: 30,
		effect: 'fade',
		loop: true,
    });
	var swiper2 = new Swiper('.swiper-container.carousel_gioithieu', {
       
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
		effect: 'fade',
		loop: true,
    });
	var swiper3 = new Swiper('.swiper-container.carousel_thethao', {
        autoplay:5000,
		effect: 'fade',
		loop: true,
    });
	var swiper4 = new Swiper('.swiper-container.carousel_truyenhinh', {
        autoplay:5000,
		effect: 'fade',
		loop: true,
    });
	var swiper5 = new Swiper('.swiper-container.carousel_game_show', {
        autoplay:5000,
		effect: 'fade',
		loop: true,
    });
	var swiper6 = new Swiper('.swiper-container.carousel_sukien', {
        autoplay:5000,
		effect: 'fade',
		loop: true,
    });
	var swiper7 = new Swiper('.swiper-container.carousel_phimtruyen', {
        autoplay:5000,
		effect: 'fade',
		loop: true,
    });
	
	
	
});
