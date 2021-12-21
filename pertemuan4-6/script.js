$(document).ready(function(){

	// Part -1
	// efek hide
	$('#hide').click(function(){
		$('#kotak').hide(1000); // beberapa bisa menggunakan kedalam paramater dalam bentuk waktu ms slow, normal, dan fast.
	});

	// efek show
	$('#show').click(function(){
		$('#kotak').show(1000); // beberapa bisa menggunakan kedalam paramater dalam bentuk waktu ms slow, normal, dan fast.
	});

	//efek fadeOut
	$('#fadeout').click(function(){
		$('.box1').fadeOut();
		$('.box2').fadeOut(2000);
		$('.box3').fadeOut(3000);
		$('.box4').fadeOut(3500);
	})

	//efek fadeIn
	$('#fadein').click(function(){
		$('.box1').fadeIn();
		$('.box2').fadeIn(2000);
		$('.box3').fadeIn(3000);
		$('.box4').fadeIn(3500);
	})

	//efek fadeToggle
	$('#fadetoggle').click(function(){
		$('.box1').fadeToggle();
		$('.box2').fadeToggle(2000);
		$('.box3').fadeToggle(3000);
		$('.box4').fadeToggle(3500);
	})

	//efek fadeTo
	$('#fadeto').click(function(){
		$('.box1').fadeTo("slow",0);
		$('.box2').fadeTo("slow",0.2);
		$('.box3').fadeTo("slow",0.4);
		$('.box4').fadeTo("slow",1);
	})

	// Part -2
	// slideUp
	$('#slideup').click(function() {
		$('#slide').slideUp('slow');
	});

	// slideDown
	$('#slidedown').click(function() {
		$('#slide').slideDown('slow');
	});

	// slideToggle
	$('#slidetoggle').click(function() {
		$('#slide').slideToggle('slow');
	});

	// Part -3
	// animate
	$('#kiri').click(function() {
		$('#animate-box').animate({'left': "-=100px"}, "slow"); //untuk speed bisa dibuat dengan satuan ms (mili second)
	});
	$('#kanan').click(function() {
		$('#animate-box').animate({'right': "-=100px"}, "slow"); //untuk speed bisa dibuat dengan satuan ms (mili second)
	});

	// clearQueue
	$('#start').click(function() {
		$('#clearqueue-box').animate({'right': "-=500px"}, 5000); //untuk speed bisa dibuat dengan satuan ms (mili second)
		$('#clearqueue-box').queue(function() {
		});
	});
	$('#stop').click(function(argument) {
		$('#clearqueue-box').clearQueue();
		$('#clearqueue-box').stop();
	})

	// delay
	$('#delay').click(function() {
		$('#kotak-satu').slideUp(2000).delay(3000).fadeIn(2000);
		$('#kotak-dua').slideUp(2000).fadeIn(2000);
	})

});



