$(document).ready(function() {
	setInterval(function() {
		var d = new Date();
		// console.log(d);
		var h = d.getHours();
		var m = d.getMinutes();
		$('.txt-number').html(h + ':' + m);
	}, 1000);
});
