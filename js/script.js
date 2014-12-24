$(document).ready(function() {
	var bool = true;
	if($(window).width()>768){
		$('.collection1 .row  .left').height($('.collection1 .row  .right').outerHeight());
	}else{
		$('.collection1 .row  .left').height('85');
	}

	$(window).scroll(function(event) {
		if($(window).width() >= 768){
			if($(this).scrollTop() >= 300){
				$('.navbar-fixed-top').addClass('shownavbar');
				$('.navbar-toggle').css('top', 100+'px');
			}else{
				$('.navbar-fixed-top').removeClass('shownavbar');
				$('.navbar-toggle').css('top', 10+'px');
			}
		}		
	});

	// $('.carousel').carousel({
 //        interval: 5000 
 //    })

		$('.navbar-toggle').on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('move');
			$('.main').toggleClass('movemain');
			$('.hiddenmenu').toggleClass('movehiddenmenu');
		});

		$('.sliderCollection').hover(function() {
			$('.collection .second').addClass('hover');
		}, function() {
			$('.collection .second').removeClass('hover');
		});

		$(window).resize(function() {
			if($(window).outerWidth()>768){
				$('.collection1 .row  .left').height($('.collection1 .row  .right').outerHeight());
			}else{
				$('.collection1 .row  .left').height('85');
			}
			
		});

		$('.hiddenmenu li').on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();

			$(this).children('ul').slideToggle('400');

		});

		if($(window).width()<768){
			var top = $('.navbar-fixed-top').outerHeight();
			$('.collection').css('margin-top', top+'px');
			$('.navbar-toggle').css('top', 190+'px');
		}else{
			$('.collection').css('margin-top', -125+'px');
			$('.navbar-toggle').css('top', 10+'px');
		}

		$(window).resize(function(event) {
			if($(window).width()<768){
				var top = $('.navbar-fixed-top').outerHeight();
				$('.collection').css('margin-top', top+'px');
				$('.navbar-toggle').css('top', 190+'px');
			}else{
				$('.collection').css('margin-top', -125+'px');
				$('.navbar-toggle').css('top', 10+'px');
			}
		});
});