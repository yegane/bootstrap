$(document).ready(function() {
	var bool = true;
	if($(window).width()>768){
		$('.collection1 .row  .left-collection1').height($('.collection1 .row  .right').outerHeight());
	}else{
		$('.collection1 .row  .left-collection1').height('85');
	}

	$('.hiddenmenu').slimScroll({
	    color: '#FFFF80',
	    size: '10px',
	    height : '100%',
	    width : '200px',
	    alwaysVisible: true
	});

	$(window).scroll(function(event) {
		if($(window).width() >= 768){
			if($(this).scrollTop() >= 167){
				$('.navbar-fixed-top').addClass('shownavbar');
				$('.navbar-toggle').css('top', 160+'px');
			}else{
				$('.navbar-fixed-top').removeClass('shownavbar');
				$('.navbar-toggle').css('top', 160+'px');
			}
		}		
	});

		$('.navbar-toggle').on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('move');
			$('.main').toggleClass('movemain');
			$('.hiddenmenu').toggleClass('movehiddenmenu');
			$('.slimScrollDiv').toggleClass('show');
		});

		$('.sliderCollection').hover(function() {
			$('.collection .second').addClass('hover');
		}, function() {
			$('.collection .second').removeClass('hover');
		});

		$(window).resize(function() {
			if($(window).outerWidth()>768){
				$('.collection1 .row  .left-collection1').height($('.collection1 .row  .right').outerHeight());
			}else{
				$('.collection1 .row  .left-collection1').height('85');
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
			$('.navbar-toggle').css('top', 230+'px');
		}else{
			$('.collection').css('margin-top', -125+'px');
		}

		$(window).resize(function(event) {
			if($(window).width()<768){
				var top = $('.navbar-fixed-top').outerHeight();
				$('.collection').css('margin-top', top+'px');
				$('.navbar-toggle').css('top', 230+'px');
				$('.collection1 .row  .left-collection1').height('85');
			}else{
				$('.collection').css('margin-top', -125+'px');
				$('.collection1 .row  .left-collection1').height($('.collection1 .row  .right').outerHeight());
			}
		});
});