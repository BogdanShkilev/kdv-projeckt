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
	$('.favorite-slider').slick({
		infinite: false,
		slidesToShow: 1,
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





// cart script 

$( document ).ready(calculateСost())

function calculateСost() {
	var total = 0;
	$('.cart-item').each(function(index){
		var discount = (parseFloat($(this).find('.discount i').text())) ? (parseFloat($(this).find('.discount i').text())) : 0;
		// расчет по количества (введенного пользователем) и цены 
		var quantity = parseFloat($(this).find('.quantity').val())
		var price = parseFloat($(this).find('.price').text())
		var totalThis = quantity * (price - discount);
		$(this).find('.amount b').text(totalThis.toFixed(0))

		// tace value of amount price and add it to total
		var amItem = $(this).find('.amount b').text()
		amItem = amItem.replace(" ", '')
		amItem = parseFloat(amItem)
		total += amItem;
	})
	$('.total').text(total)
	// var quantity = $(this).val();
 //    alert('hello ' + quantity)
}
$('.delate').click(function(){
	$(this).closest('.cart-item').remove()
	calculateСost()

})


function requiredColor() {
	
	
}

function checkName(name){
	if (name.value == 0){
		name.valid = false;
		// document.forms['delivery']['name'].focus();
		document.forms['delivery']['name'].parentNode.setAttribute('data-content','Необходимо заполнить');
		document.forms['delivery']['name'].style.borderColor = '#e4042a';
		isValid = false;
	} else {
		name.valid = true;
		document.forms['delivery']['name'].parentNode.setAttribute('data-content','');
		document.forms['delivery']['name'].style.borderColor = '#c7d7e2 ';
	}
}
function checkAddress(address){
	if (address.value == 0){
		address.valid = false;
		// document.forms['delivery']['address'].focus();
		document.forms['delivery']['address'].parentNode.setAttribute('data-content','Необходимо заполнить');
		document.forms['delivery']['address'].style.borderColor = '#e4042a';
		
	} else {
		address.valid = true;
		document.forms['delivery']['address'].parentNode.setAttribute('data-content','');
		document.forms['delivery']['address'].style.borderColor = '#c7d7e2 ';
	}
}
function checkDistance(distance){
	if (distance.value == 0){
		distance.valid = false;

		// document.forms['delivery']['distance'].style.borderColor = '#e4042a';
		document.getElementById('distance-styler').className += " valid-red";;
		
	} else {
		distance.valid = true;

		document.forms['delivery']['distance'].style.borderColor = '#c7d7e2 ';
	}
}
function FormField(obj){
	this.obj = obj;
	this.value = obj.value;
	this.valid = false;
}
$('#delivery').submit(function(){
	let isValid = false;
	let name = new FormField(document.forms['delivery']['name']);
	let address = new FormField(document.forms['delivery']['address']);
	let distance = new FormField(document.forms['delivery']['distance']);
	checkAddress(address);
	checkDistance(distance);
	checkName(name);
	// var isFormValid = true;
	// if (checkAddress() === false && checkName() === false){
	// 	isFormValid = false;
	// }
	// return isFormValid;
	return false;

})

document.forms['delivery']['address'].setAttribute('data-content','bar');

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
})
$('#myModal-2').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

function foo(){
	$('.slick-prev').click()
}
function clickf(){
	$('#myModal').click()
}

// setTimeout(clickf, 0)
$('.modal-body').find('.tile-item').click(function(){
	$('.modal').find('.close').click()
	$('body').css({padding: '0',
				   overflow: 'hidden'})
	$('.modal').css({padding: '0',
				   overflowY: 'auto'})
})
$('.modal').on('show.bs.modal', function (e) {
  $('body').css({padding: '0',
				   overflow: 'hidden'})
})
$('.modal').on('hide.bs.modal', function (e) {
  $('body').css({padding: '0',
				   overflowY: 'auto'})
})



