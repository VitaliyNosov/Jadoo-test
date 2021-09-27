// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	
	// console greetings
	let jadoo = '"Jadoo" html test'
	console.log ( '%c%s', 'color: #F1A501; font: 0.8rem/1 Tahoma;', jadoo );
	let autor = 'Developer: Vitaliy Nosov';
	console.log ( '%c%s', 'color: #DF6951; font: 1.2rem/1 Tahoma;', autor );

	// burger menu

	$('#burger-icon').click(function () {
		$('.menu-block').slideToggle(500);
	});
	$(window).resize(function () {
		if ($(window).width() > 500) {
			$('.menu-block').removeAttr('style');
		}
	});

})
