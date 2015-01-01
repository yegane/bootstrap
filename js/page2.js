$(window).load(function(){

	var hfix = $('.navbar-fixed-top').height();
	var wh = $(window).height();


	$('.content-page').css('margin-top', hfix);

	$(window).resize(function(event) {
		var hfix = $('.navbar-fixed-top').height();
		$('.content-page').css('margin-top', hfix);
	});

	$('.view-map').on('click', function(event) {
		event.preventDefault();
		$('.best , .bestCollection').addClass('hide');
		$('.jobs').addClass('movejobs');
		$('.row').addClass('increaseWidth');
		$('#left').addClass('dcol');
		$('#right').addClass('icol');
		$('.view-map').addClass('hidden');
		$('.back , .search').removeClass('hidden');
		$('.small-map img').attr('src', 'images/test.jpg');
		$('.small-map img').addClass('increaseHeight');
	});

	$('.navbar-toggle').on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('move');
			$('.main').toggleClass('movemain');
			$('.hiddenmenu').toggleClass('movehiddenmenu');
			$('.slimScrollDiv').toggleClass('show');
		});

	$('.back').on('click', function(event) {
		event.preventDefault();
		$('.best , .bestCollection').removeClass('hide');
		$('.jobs').removeClass('movejobs');
		$('.row').removeClass('increaseWidth');
		$('#left').removeClass('dcol');
		$('#right').removeClass('icol');
		$('.view-map').removeClass('hidden');
		$('.back , .search').addClass('hidden');
		$('.content-page').height('auto');

		$('.small-map img').attr('src', 'images/map.jpg');
		$('.small-map img').removeClass('increaseHeight');

	});

	$('.hiddenmenu .menu').slimScroll({
	    color: '#BBBBBB',
	    size: '10px',
	    height : '100%',
	    width : '200px',
	    alwaysVisible: true
	});



});