$(document).ready(function() {
	if($(window).width()>768){
		$('.collection1 .row  .left').height($('.collection1 .row  .right').outerHeight());
	}else{
		$('.collection1 .row  .left').height('85');
	}

	$(window).scroll(function(event) {
		if($(this).scrollTop() >= 300){
			$('.navbar-fixed-top').addClass('shownavbar');
		}else{
			$('.navbar-fixed-top').removeClass('shownavbar');
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
});