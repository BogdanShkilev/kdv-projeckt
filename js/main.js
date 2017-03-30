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
	$('.modul-slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
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
		$(".nav-input").css('background', '#F8F8F8 url(images/close-tips.png) no-repeat 98% center');

	}).blur(function(){
		$(".nav-input").css('background', '#F8F8F8 url(images/search.png) no-repeat 98% center');
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



(function($) {
$(function() {

  $('input, select').styler();

});
})(jQuery);

$(function() {

    $('#checkAll').on('change', function() {
        $('input:checkbox').prop('checked', this.checked);
    });
    
});
//  Кнопка "любой" на странице расширенного поиска
function selectAllDesign(){
	$(".design").find(".jq-checkbox").removeClass('checked');
	$(".design").find("input").prop("checked", false);
}
// Кнопка очистки checkbox с форматами плитки
function deselectAllFormat(){
	$(".format").find(".jq-checkbox").removeClass('checked');
	$(".format").find("input").prop('checked', false)
}
// сброс заводов производителей
function deselectAllSelectOption(){
	$('.selectable-1').find("li").removeClass("selected");
	$('.selectable-1').find("select").val('');  
}

function checkCheckBox(){
	$('.manufacturer-country').find("input").change(function(){
		if ($(this).prop('checked')){
			$(this).closest('span').addClass('active');
		} else {
			$(this).closest('span').removeClass('active');
		}
	})
}


$(document).ready(
	checkCheckBox()
	)
window.onload= function(){
	$('.manufacturer-country').find("input").prop('checked', false);
}
function resetManufacturerCountry(){
	$(".manufacturer-country").closest('span').removeClass('active');
}

var options = {
  offset: 450
}
var header = new Headhesive('.header');


// Ховер сердечек на странице result-element.html
$('.heart-red').hover(
	function(){
		$(this).closest(".about").find("strong").css("color","#7c7c7b")
	}
	,
	function(){
		$(this).closest(".about").find("strong").css("color","#000");
		$(this).closest(".tile-item").hover(
				function(){
					$(this).find("strong").css("color","#000");
				},
				function(){
					$(this).find("strong").css("color","#7c7c7b");
				}
			)
	}
	)

$(".five-more").click(function(){
	if ($(this).hasClass("active")){
		$(this).removeClass("active")
	} else {
		$(this).addClass("active")
	}
	$(this).closest(".row").find(".more-five-section").slideToggle("slow")
})


$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
  $('body').css('background','yellow')
})

function foo(){
	$('.slick-prev').click()
}