$(window).load(function (){

	var hfix = $('.navbar-fixed-top').height();
	var wh = $(window).height();


	$('.content-page').css('margin-top', hfix);

	$(window).resize(function(event) {
		var hfix = $('.navbar-fixed-top').height();
		$('.content-page').css('margin-top', hfix);
	});

	$('.hiddenmenu .menu').slimScroll({
	    color: '#BBBBBB',
	    size: '10px',
	    height : '100%',
	    width : '200px',
	    alwaysVisible: true
	});

	$('.view-map').on('click', function(event) {
		event.preventDefault();
		$('.best').addClass('hide');
		$('.jobs').addClass('movejobs');
		$('.row').addClass('increaseWidth');
		$('#left').addClass('icol');
		$('#right').addClass('dcol');
		
		$('.view-map').addClass('hidden');
		$('.back , .search').removeClass('hidden');
		$('.small-map img').attr('src', 'images/bigmap.gif');
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
		$('.best').removeClass('hide');
		$('.jobs').removeClass('movejobs');
		$('.row').removeClass('increaseWidth');
		$('#right').removeClass('dcol');
		$('#left').removeClass('icol');
		$('.view-map').removeClass('hidden');
		$('.back , .search').addClass('hidden');
		$('.content-page').height('auto');

		$('.small-map img').attr('src', 'images/map.jpg');
		$('.small-map img').removeClass('increaseHeight');

	});

	$('.filter .click').on('click', function(event) {
		event.preventDefault();
		$('.select').slideToggle('200');
	});	

	

});