$(document).ready(function() {
	$('#tombol').click(function() {
		$('#modal-box').slideDown(1000); // pada fungsi ini bisa menggunakan attribute fadeIn dan fadeOut dan begitu juga slideIn dan slideOut
		$('#background').fadeIn(1000);
	})
	$('#close-button').click(function() {
		$('#modal-box').slideUp(1000); // pada fungsi ini bisa menggunakan attribute fadeIn dan fadeOut dan begitu juga slideIn dan slideOut
		$('#background').fadeOut(1000);
	})
})

