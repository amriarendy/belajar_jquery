$(document).ready(function(){
	//event click
	$('#click').click(function(){
		alert('Saya Sedang Belajar JQuery!');
	});

	//event dblclick
	$('#dblclick').dblclick(function() {
		$(this).css('background-color', 'red');
	});

	//event mouseleave
	$('.mouse').mouseleave(function() {
		$(this).css('background-color', 'skyblue');
	});

	//event mouseenter
	$('.mouse').mouseenter(function() {
		$(this).css('background-color', 'lime');
	});

	//event keydown kegunaan dari 
	$('#keydown').keydown(function() {
		$('#pesan_keydown').text($(this).val()) //val adalah untuk mengambil value dari tag <input>
	});

	//event keyup kegunaan dari 
	$('#keyup').keyup(function() {
		$('#pesan_keyup').text($(this).val()) //val adalah untuk mengambil value dari tag <input>
	});
})