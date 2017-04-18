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




function calc(a,b,c){
	let price = (a * b);

	var priceObj = {
			oldPrice: 0,
			newPrice: ''
		}
	if (c === ''){
		priceObj.newPrice = price;
	} else {
		priceObj.oldPrice = price;
		priceObj.newPrice = price - c;
	}
	return priceObj;
}
// cart script 
function checkIsNum(e){
	let i = e.replace(' ', '')
	return i
}

$( document ).ready(calculateСost())

function calculateСost() {
	// Поле общей стоимости
	let total = 0;
	let totalDiscount = 0;
	// Цикл всех товаров (подсчет стоимости в каждом товаре (переберает список ul))
	$('.cart-item').each(function(index){
		let discount = $(this).find('.discount-val').text()
		discount = checkIsNum(discount);
		let quantity = $(this).find('.quantity').val()
		quantity = checkIsNum(quantity)
		let price = $(this).find('.price').text()
		let amount = $(this).find('.amount')
		if (typeof quantity === 'string'){
			var amResult = calc(quantity,price,discount)
			amount.text(amResult.newPrice.toLocaleString('ru'))
			totalDiscount += discount
			total += amResult.newPrice	

			if (amResult.oldPrice != 0){
				$(this).find('.old-price').html(amResult.oldPrice.toLocaleString('ru') + ' &#8381;')
			}
		}
	})
	$('.total').text(total.toLocaleString('ru'))
	// var quantity = $(this).val();
 //    alert('hello ' + quantity)
}
$('.delate').click(function(){
	$(this).closest('.cart-item').remove()
	calculateСost()

})


/* Скрипт валидации формы
функция проверки формы: принимает объект поля формы созданый конструктором FormField */
function checkNumber(number){
	if (number.value == 0){
		// устанавливает поле валидации на ложь, далее на него будет передан фокус
		number.valid = false;
		// текст label:after
		number.obj.parentNode.setAttribute('data-content','Необходимо заполнить');
		// стили ошибки
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
// конструктор полей формы
function FormField(obj){
	this.obj = obj;
	this.value = obj.value;
	this.valid = true;
}
$('#delivery').submit(function(){
	// переменная отвечающая за отправку формы
	var isFormValid = false;
	// объекты
	var number = new FormField(document.forms['delivery']['number']);
	var address = new FormField(document.forms['delivery']['address']);
	var distance = new FormField(document.forms['delivery']['distance']);
	var fromMkad = new FormField(document.forms['delivery']['from_mkad']);
	var methodDelivery = new FormField(document.forms['delivery']['method_delivery']);
	// проверка полей изменение свойства valid в объекте
	checkAddress(address);
	// если выбран пункт самовывоз 2 поля не проверяються
	if (!(methodDelivery.value === 'pickup')){
		checkDistance(distance);
		checkMcad(fromMkad);
	}
	checkNumber(number);
	// создание объекта с полями всей формы, для перебора значений свойства valid
	var objects = {address,distance,fromMkad,number};
	var getFocus = true;
	// ищет первый объект с свойством valid = false и присваевает объект в переменню отвечающую за передачу фокуса первому некоректоному объекту
	for ( var key in objects){
		var i = objects[key];
		if (i.valid == false){
			getFocus = i.obj;
			break;
		}
	}
	// если объект был не передан то считаеться что ошибок небыло и значение аормы присваиваеться значение true и форма отправляеться
	// иначе передаеться фокус на объект
	if (getFocus === true) {
		isFormValid = true;
	} else {
		getFocus.focus();
	}
	// запускаеться проверка формы при кадом изменении поля (убирает или удалят бордер и текст ошибки)
	checkStart();
	return isFormValid;

})

function checkStart(){
	function check(){
		var number = new FormField(document.forms['delivery']['number']);
		var address = new FormField(document.forms['delivery']['address']);
		var distance = new FormField(document.forms['delivery']['distance']);
		var fromMkad = new FormField(document.forms['delivery']['from_mkad']);
		var methodDelivery = new FormField(document.forms['delivery']['method_delivery']);
		checkAddress(address);
	if (!(methodDelivery.value === 'pickup')){
		checkDistance(distance);
		checkMcad(fromMkad);
	}
	checkNumber(number);
	}
	$('.required').find('input').change(function(){
			check()
	})
	$('.required').find('select').change(function(){
			check()
	})
}
// manufacturer script
function openManuList(){
	let obj = document.getElementById('choos-manufacturer');
		obj.style.maxHeight = '600px';
}
function closeManuList(){
	let obj = document.getElementById('choos-manufacturer');
		obj.style.maxHeight = '0';
}

// модальное окно, открытие и закрытие окна добавление товара в карзину
$('.add-to-cart').click(function(){
	$(this).siblings('.add-to-cart-block').css('max-height','800px')
})
$('.add-to-cart-block').find('.close').click(function(){
	$(this).closest('.add-to-cart-block').css('max-height', '0')
})
// Канкулятор количества плитки, задан на изменение значения плитки
$('.quantity').change(function(){
	let values = $(this).closest('.modal-content').find('.tile-size').text();
 	values = values.split('×');
	values = (+values[0] / 100) * (+values[1] / 100);
	let quantity = $(this).val().replace(',', '.');
	let result = Math.round(quantity / values);
	$(this).siblings('.count-result').val(result);
})



// cкрипт для связи родительского checbox и детей (страна - заводы)
// На вход принимает 1) Класс label с checkbox, 2) Родительский id (с названием страны)
function relatChecbox(labelClass,perantCB){
	$(labelClass).change(function(){
		let Val = false;
		$(labelClass).each(function(){
			if ($(this).find('input').prop('checked')){
				if (Val == false){
					Val = true;
				}
			} else {
				
			}
		})
		if (Val){
			$(perantCB + '-styler').addClass('checked')
			$(perantCB).prop('checked', true)
		} else {
			$(perantCB + '-styler').removeClass('checked')
			$(perantCB).prop('checked', false)
		}
	})
}
relatChecbox('.f-rus','#fab-rus')
relatChecbox('.f-sp','#fab-spain')
relatChecbox('.f-it','#fab-italy')

// функция копирует значения выбраных элементов в список ul
// Принимает на вход: 1)селектор обертки чекбоксов, 2) оббертка ul списка со списком, 
// 3) имя массива где храняться выбраные фабрики
function addFabricsToList(perId,wrap,arrName){
	$(perId).find('input[name="fabrics"]').each(function(){
		if ($(this).prop('checked')){
			arrName.push($(this).val());
		}
	})
	for (let i = 0; i < arrName.length;i++){
		$(wrap).append('<li>' + arrName[i] + '</li>')
	}
}
// связывает чекбокс в окне и на основной странице
// принимат параметры 1) id чекбокса из формы, 2) id чекбокса куда копировать значение
function relatePerChecbox(idChecked, idPush){
	if ($(idChecked).prop('checked')){
		$(idPush).prop('checked', true)
		$(idPush + '-styler').addClass('checked')
	} else {
		$(idPush).prop('checked', false)
		$(idPush + '-styler').removeClass('checked')
	}
}
// на кнопку вешаеться событие копирования выбраных фабрик в списки
$('#accept-changes-man').click(function(){
	$('.manufacturer-list').find('li').remove();
	let rus = [];
	let sp = [];
	let it = [];

	addFabricsToList("#russia-list-check",'#russia-list',rus);
	addFabricsToList("#spain-list-check",'#spain-list',sp);
	addFabricsToList("#italy-list-check",'#italy-list',it);

	relatePerChecbox("#fab-rus",'#fab-rus-par')
	relatePerChecbox("#fab-spain",'#fab-spain-par')
	relatePerChecbox("#fab-italy",'#fab-italy-par')

	closeManuList();
})

// добавление и удаление полей формы если выбран самовывоз
$("input[name='method_delivery']").change(function(){
		if ($("input[value='pickup']").prop("checked")){
			$('.address').attr('disabled','1')
			$('.address').val('Москва')
			$('.ask-distance-1, .ask-distance-2, .ask-floor').css('display','none')
		} else {
			$('.address').removeAttr('disabled','1')
			$('.address').val('')
			$('.ask-distance-1, .ask-distance-2, .ask-floor').css('display','block')
		}
	})



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
if($('header').hasClass('fixed-nav')){
	var header = new Headhesive('.fixed-nav');
} 

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



