$(document).ready(function() {
	$('.toggleI').on('click', function() {
		console.log('aaaaaaaaaa');
		$('.menu-main-screen').css({ width: '100%', opacity: '1' });
		$('.ul-menu').css({ display: 'block' });
	});
	$('.close-menu').on('click', function() {
		$('.menu-main-screen').css({ width: '1%', opacity: '0' });
		$('.ul-menu').css({ display: 'none' });
	});
});
