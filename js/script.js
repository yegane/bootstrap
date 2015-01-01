$(document).ready(function() {
	var bool = true;
	var name;
	if($(window).width()>768){
		$('.collection1 .row  .left-collection1').height($('.collection1 .row  .right').outerHeight());
	}else{
		$('.collection1 .row  .left-collection1').height('85');
	}

	if($(window).width()<992 && $(window).width()>640){
		var hd = $('.dictionary').outerHeight();
		var ha = $('.awghat').outerHeight();
		var hc = $('.calendar').outerHeight();
		var hn = $('#news').outerHeight();

		if(hd > ha){
			$('.dictionary , .awghat').height(hd);
		}else{
			$('.dictionary , .awghat').height(ha);
		}


		if(hc > hn){
			$('.calendar , #news').height(hc);
		}else{
			$('.calendar , #news').height(hn);
		}
	}

	$('.hiddenmenu .menu').slimScroll({
	    color: '#BBBBBB',
	    size: '10px',
	    height : '100%',
	    width : '200px',
	    alwaysVisible: true

	});

	$(window).scroll(function(event) {
		if($(window).width() >= 768){
			if($(this).scrollTop() >= 245){
				$('.navbar-fixed-top').addClass('shownavbar');
				$('.navbar-toggle').css('top', 160+'px');
			}else{
				$('.navbar-fixed-top').removeClass('shownavbar');
				$('.navbar-toggle').css('top', 160+'px');
			}
		}	
		console.log($(window).scrollTop());	
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
			if($(window).outerWidth()>=768){
				$('.collection').css('margin-top', -125+'px');
				$('.collection1 .row  .left-collection1').height($('.collection1 .row  .right').outerHeight());
			}else{
				$('.collection1 .row  .left-collection1').height('85');
				var top = $('.navbar-fixed-top').outerHeight();
				$('.collection').css('margin-top', top+'px');
				$('.navbar-toggle').css('top', 230+'px');
			}

			var hd = $('.dictionary').outerHeight();
			var ha = $('.awghat').outerHeight();
			var hc = $('.calendar').outerHeight();
			var hn = $('#news').outerHeight();

			if(hd > ha){
				$('.dictionary , .awghat').height(hd);
			}else{
				$('.dictionary , .awghat').height(ha);
			}


			if(hc > hn){
				$('.calendar , #news').height(hc);
			}else{
				$('.calendar , #news').height(hn);
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
			$('.collection1 .row  .left-collection1').height('85');
		}else{
			$('.collection').css('margin-top', -125+'px');
			$('.collection1 .row  .left-collection1').height($('.collection1 .row  .right').outerHeight());
		}

		$(window).resize(function(event) {
			
		});

		$('.hiddenmenu a').hover(function() {
			if($(this).length){
				name = $(this).children('img').attr('src');
				name = name.substring(7,9);
				$(this).children('img').attr('src', 'images/'+name+'h.png');
			}
		}, function() {
			$(this).children('img').attr('src', 'images/'+name+'2.png');
		});
});