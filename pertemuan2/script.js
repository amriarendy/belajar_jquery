$(document).ready(function() {
	//selector tag
	$('h1').css('color','red');
	$('p').css('color', 'blue');

	//selector class
	$('.judul').css('background-color','red');
	$('.paragraf').css('background-color','salmon');

	//selector id
	$('#judul').css('border', '2px solid blue');
	$('#paragraf').css('border', '2px solid green');

	//contoh selector *
	$('*').css('background-color', 'skyblue');

	//eq() memilih index yang akan digunakan
	$('h4:eq(2)').css('background-color','yellow');

	$('input:submit').css('background-color', 'green');
	$('input:button').css('padding', '20px');
})

