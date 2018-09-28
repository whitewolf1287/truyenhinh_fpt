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
			$('.par').removeClass('disable');
			
		}
		else{
			$(".HeaderPage").removeClass("scaleheader");
			$('.par').removeClass('disable');
			$( '.par').removeClass( "hover" );
		}
	});
	
	$( ".par" ).hover(
	  function() {
		if($(this).hasClass('hover') !== true){
			$( this ).addClass( "hover" );
		}  
		
		if($( ".par" ).hasClass('active') === true){
			$('.par.active').addClass('disable');
		}  
	  }, function() {
		$('.par').removeClass('disable');
		$( ".par" ).removeClass( "hover" );
		if($(this).hasClass('hover') === true){
			$( this ).removeClass( "hover" );
		}  
	  }
	);
		
	$('.par').click(function() {
		
		if($(this).hasClass('hover') !== true){
			$(this).addClass("hover");
			$('.par.active').addClass('disable');
		}

		
	});
	
	
	if($(window).width() <= 1199){
		var w_sli = $(window).width() / 1.618 / 1.618;
		$('.carousel').css({'height':w_sli});
	}
	$( window ).resize(function() {
		if($(window).width() <= 1199){
			w_sli = $(window).width() / 1.618 / 1.618;
			$('.carousel').css({'height':w_sli});
		}
    });
	
});
