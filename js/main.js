$(document).ready(function(){
	$('.sl').slick({
		arrows: true,
		dots: true,
		infinite: true,
		// autoplay: true,
		autolaySpeed: 3000
	});
});



$(document).ready(function(){
	$('#ex1').zoom({ on:'click' });
	$('#ex2').zoom({ on:'click' });
	$('#ex3').zoom({ on:'click' });
	$('#ex4').zoom({ on:'click' });
	$('#ex5').zoom({ on:'click' });
});

$(document).ready(function(){
	$('.map-dlv').click(function() {
		$('.wrap-bable').slideDown('fast');
	});
	$('.close-bbl').click(function() {
		$('.wrap-bable').slideUp('fast');
	});
});

// Bable contacts
// kyrska
$(document).ready(function(){
	$('#kyrska-point').click(function() {
		$('.kyrska-bable').slideDown('fast');
	});
	$('.close-bbl').click(function() {
		$('.wrap-bable').slideUp('fast');
	});
});
// poveletska
$(document).ready(function(){
	$('#paveletska-point').click(function() {
		$('.paveletska-bable').slideDown('fast');
	});
	$('.close-bbl').click(function() {
		$('.wrap-bable').slideUp('fast');
	});
});
// bobireva
$(document).ready(function(){
	$('#babirevo-point').click(function() {
		$('.babireva-bable').slideDown('fast');
	});
	$('.close-bbl').click(function() {
		$('.wrap-bable').slideUp('fast');
	});
});
// profsoysna
$(document).ready(function(){
	$('#prof-point').click(function() {
		$('.profsousna-bable').slideDown('fast');
	});
	$('.close-bbl').click(function() {
		$('.wrap-bable').slideUp('fast');
	});
});
// rechnoi
$(document).ready(function(){
	$('#rechnoi-point').click(function() {
		$('.rechnoi-bable').slideDown('fast');
	});
	$('.close-bbl').click(function() {
		$('.wrap-bable').slideUp('fast');
	});
});
// strogina
$(document).ready(function(){
	$('#strogino-point').click(function() {
		$('.strogino-bable').slideDown('fast');
	});
	$('.close-bbl').click(function() {
		$('.wrap-bable').slideUp('fast');
	});
});
// profsoysna copy 1
$(document).ready(function(){
	$('#prof-point-1').click(function() {
		$('.profsousna-bable-1').slideDown('fast');
	});
	$('.close-bbl').click(function() {
		$('.wrap-bable').slideUp('fast');
	});
});
// profsoysna copy 2
$(document).ready(function(){
	$('#prof-point-2').click(function() {
		$('.profsousna-bable-2').slideDown('fast');
	});
	$('.close-bbl').click(function() {
		$('.wrap-bable').slideUp('fast');
	});
});












$(document).ready(function() {
	var elem = $(".zoom");
	elem.on("click", function() {
		if (elem.hasClass('zoom-plus')) {
			elem.removeClass('zoom-plus');
			elem.addClass('zoom-minus');
		} else {
			elem.removeClass('zoom-minus');
			elem.addClass('zoom-plus');
		}
	});
})

$(document).ready(function(){
	$(".nav-input").focus(function(){
		$(".tips-block").addClass("dsp-block").animate({opacity: 1}, 300);
	}).blur(function(){
		$(".tips-block").removeClass("dsp-block").animate({opacity: 0}, 300);
	});
});

$(document).ready(function(){
	$(".nav-input").focus(function(){
		$(".nav-input").css('background', '#F8F8F8 url(../images/close-tips.png) no-repeat 98% center');

	}).blur(function(){
		$(".nav-input").css('background', '#F8F8F8 url(../images/search.png) no-repeat 98% center');
	});
});

$(document).ready(function(){
	var elem = $(".link-close");
	elem.on("click", function() {
		if ($('tips-block').css('display', 'none')) {
			$('tips-block').css('display', 'block');
		} else {
			$('tips-block').css('display', 'block');
		}
	});
});








  