$(document).ready(function() {
	var counter = function(x) {
		var n = parseInt($(x).text());
		// console.log(n);
		var m = setInterval(function() {
			n++;
			// console.log(n);
			$(x).text(n);
			if (n === 3587 && x === '#n1') {
				clearInterval(m);
			}
			if (n === 207 && x === '#n2') {
				clearInterval(m);
			}
			if (n === 2500 && x === '#n3') {
				clearInterval(m);
			}
			if (n === 873 && x === '#n4') {
				clearInterval(m);
			}
			if (n === 900 && x === '#n5') {
				clearInterval(m);
			}
		}, 10);
	};
	counter('#n1');
	counter('#n2');
	counter('#n3');
	counter('#n4');
	counter('#n5');
});
