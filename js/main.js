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

		// take value of amount price and add it to total
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



function checkNumber(number){
	if (number.value == 0){
		number.valid = false;
		// document.forms['delivery']['name'].focus();
		number.obj.parentNode.setAttribute('data-content','Необходимо заполнить');
		number.obj.style.borderColor = '#e4042a';
		isValid = false;
	} else {
		number.valid = true;
		number.obj.parentNode.setAttribute('data-content','');
		number.obj.style.borderColor = '#c7d7e2 ';
	}
}
function checkAddress(address){
	if (address.value == 0){
		address.valid = false;
		// document.forms['delivery']['address'].focus();
		address.obj.parentNode.setAttribute('data-content','Необходимо заполнить');
		address.obj.style.borderColor = '#e4042a';
		
	} else {
		address.valid = true;
		address.obj.parentNode.setAttribute('data-content','');
		address.obj.style.borderColor = '#c7d7e2 ';
	}
}
function checkDistance(distance){
	if (distance.value == 0){
		distance.valid = false;

		// document.forms['delivery']['distance'].style.borderColor = '#e4042a';
		document.getElementById('distance-styler').parentNode.setAttribute('data-content','Необходимо выбрать пункт');
		document.getElementById('distance-styler').className += " valid-red";;
		
	} else {
		distance.valid = true;
		document.getElementById('distance-styler').parentNode.setAttribute('data-content','');
		document.getElementById('distance-styler').classList.remove('valid-red');
	}
}
function checkMcad(fromMkad){
	if (fromMkad.value == 0){
		fromMkad.valid = false;
		fromMkad.obj.parentNode.setAttribute('data-content','Необходимо заполнить');
		fromMkad.obj.style.borderColor = '#e4042a';
		
	} else {
		fromMkad.valid = true;
		fromMkad.obj.parentNode.setAttribute('data-content','');
		fromMkad.obj.style.borderColor = '#c7d7e2 ';
	}
}
function FormField(obj){
	this.obj = obj;
	this.value = obj.value;
	this.valid = true;
}
$('#delivery').submit(function(){
	var isFormValid = false;
	var number = new FormField(document.forms['delivery']['number']);
	var address = new FormField(document.forms['delivery']['address']);
	var distance = new FormField(document.forms['delivery']['distance']);
	var fromMkad = new FormField(document.forms['delivery']['from_mkad']);
	var methodDelivery = new FormField(document.forms['delivery']['method_delivery']);
	checkAddress(address);
	if (methodDelivery.value === 'pickup'){
		
	}	else {
		checkDistance(distance);
		checkMcad(fromMkad);
	}
	checkNumber(number);
	var objects = {address,distance,fromMkad,number};
	// console.log(objects.number.value);
	// alert(objects.number.value);
	var getFocus = true;
	for ( var key in objects){
		var i = objects[key];
		if (i.valid == false){
			getFocus = i.obj;
			break;
		} else {}
	}
	if (getFocus === true) {
		isFormValid = true;
	} else {
		getFocus.focus();
	}
	checkStart();
	return isFormValid;

})

function checkStart(){
	function check(){
		var number = new FormField(document.forms['delivery']['number']);
		var address = new FormField(document.forms['delivery']['address']);
		var distance = new FormField(document.forms['delivery']['distance']);
		var fromMkad = new FormField(document.forms['delivery']['from_mkad']);
		checkAddress(address);
		checkDistance(distance);
		checkMcad(fromMkad);
		checkNumber(number);
	}
	$('.required').find('input').change(function(){
			check()
	})
	$('.required').find('select').change(function(){
			check()
	})
}


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



