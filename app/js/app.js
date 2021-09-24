// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	console.log('dc');

	$('#burger-icon').click(function () {
		$('.menu-block').slideToggle(500);
	});
	$(window).resize(function () {
		if ($(window).width() > 500) {
			$('.menu-block').removeAttr('style');
		}
	});

})
