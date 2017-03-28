// Яндекс карта (метки, группы, балуны, стили меток), скрипты связи меток и меню
		ymaps.ready(init);
		var myMap, 
		myPlacemark;

		function init(){ 
			myMap = new ymaps.Map("map", {
				center: [55.75448143225835,37.6210858156899],
				zoom: 11
			}); 

			// стиль метки


			// Эту группу не будем добавлять на карту, чтобы помещенные в нее геообъекты были не видны.
			hidden = new ymaps.GeoObjectCollection(),
			// Эту группу добавим на карту.
            visible = new ymaps.GeoObjectCollection(),
            // Упорядоченные коллекции с геообъектами.
            group1 = new ymaps.GeoObjectCollection({
                properties: {
                    id: 'group-1',
                    name: 'Известные памятники'
                }
            }, {
                preset: 'twirl#redIcon'
            });
            one = new ymaps.Placemark([55.75155530, 37.67013699], { id: 'group-1-1', balloonContent: '<h3 class="h3 metro brown">Курская</h3><h3 class="h3 metro white-green">Чкаловская</h3><p class="street">Россия, Москва, Нижняя Сыромятническая улица, 10с3</p><p class="number pull-left">+7 965 162-66-56</p><span class="work-time pull-left clearfix">с 10:00 до 20:00</span>' },{preset: 'islands#redDotIcon'})
            two = new ymaps.Placemark([55.72206103, 37.63279094], { id: 'group-1-2', balloonContent: '<h3 class="h3 metro brown">Павелецкая</h3><h3 class="h3 metro grey">Серпуховская</h3><p class="street">1-й Щипковый переулок д. 4, А-26</p><p class="number pull-left">+7 985 360-36-65</p><span class="work-time pull-left clearfix">с 10:00 до 20:00</span>' },{preset: 'islands#redDotIcon'})
            three = new ymaps.Placemark([55.88477579, 37.60374416], { id: 'group-1-3', balloonContent: '<h3 class="h3 metro grey">Бабирево</h3><p class="street">ул. Пришвина, д. 26/3, ТВК "Миллион мелочей", 1 этаж, стенд С29 </p><p class="number pull-left">+7 965 162-66-56</p><span class="work-time pull-left clearfix">с 09:00 до 20:00</span>' },{preset: 'islands#redDotIcon'})
            four = new ymaps.Placemark([55.67192837, 37.58368089], { id: 'group-1-4', balloonContent: '<h3 class="h3 metro orange">Профсоюзная</h3><p class="street">Нахимовский пр-т, с. 24, ВК «Экспострой на Нахимовском», павильон №3, сектор В, место 350</p><p class="number pull-left">+7 985 162-66-56</p><span class="work-time pull-left clearfix">с 09:00 до 20:00</span>' },{preset: 'islands#redDotIcon'})
            six = new ymaps.Placemark([55.80768430, 37.38829868], { id: 'group-1-6', balloonContent: '<h3 class="h3 metro blue">Строгино</h3><p class="street">5-й км МКАД (внешняя сторона), МТВК Синдика, пав. В403 и В409</p><p class="number pull-left">+7 495 779-69-77</p><span class="work-time pull-left clearfix">с 10:00 до 20:00</span>' },{preset: 'islands#redDotIcon'})
            five = new ymaps.Placemark([55.85505975, 37.47666065], { id: 'group-1-5', balloonContent: '<h3 class="h3 metro green">Речной Вокзал</h3><p class="street">Нахимовский пр-т, с. 24, Ленинградское шоссе, Химки-Центр, вл. 5, ТЦ «Лига», цокольный этаж</p><p class="number pull-left">+7 495 779-69-77</p><span class="work-time pull-left clearfix">с 10:00 до 20:00</span>' },{preset: 'islands#redDotIcon'})
            group1
                .add(one)
                .add(two)
                .add(three)
                .add(four)
                .add(five)
                .add(six);
             // Добавляем все группы в одну коллекцию.
            visible
                .add(group1);

            // Добавляем все группы на карту.
            myMap.geoObjects.add(visible);


             // Обрабатываем клики на пунктах меню.


            // Обрабатываем клики на пунктах меню эелементов группы.
            $('.adress-point').on('click', function (e) {
                // Отменяем основное поведение (переход по ссылке)
                e.preventDefault();

                $(this)
                    .toggleClass('active')
                    .siblings('.active')
                    .removeClass('active');

                itemToggle(this.id);
            });

            // Ищем нужную группу и добавляем/удаляем ее с карты.
            function groupToggle(id) {
                // Все группы лежат внутри одной коллекции, которую мы получили из YMapsML.
                var it, group;

                // Сначала ищем в видимой на карте коллекции.
                it = visible.getIterator();
                while(group = it.getNext()) {
                    if(group.properties.get('id') === id) {
                        hidden.add(group);
                        return;
                    }
                }

                // Если мы сюда попали, значит коллекция уже удалена и надо искать в удаленных.
                it = hidden.getIterator();
                while(group = it.getNext()) {
                    if(group.properties.get('id') === id) {
                        visible.add(group);
                        return;
                    }
                }
            }

            // Ищем нужную метку и открываем/закрываем ее балун.
            function itemToggle(id) {
                var it = visible.getIterator(),
                    group;
                    console.log(it);
                while(group = it.getNext()) {
                    for(var i = 0, len = group.getLength(); i < len; i++) {
                        var placemark = group.get(i);

                        if(placemark.properties.get('id') === id) {
                        	placemark.balloon.open();
                            if(placemark.balloon.isOpen()) {
                                placemark.balloon.open();
                            }
                            else {
                                myMap.panTo(placemark.geometry.getCoordinates(), {
                                    delay: 0,
                                    callback: function () {
                                        placemark.balloon.open();
                                    }
                                });
                            }
                            return;
                        }
                    }
                }
            }
           	// Каждой метке соответствует одно событие по имени события
            one.events.add('click', function (e) {
            		// Удаляет активный класс со всех пунктов класса
            		$(".adress-point").removeClass("active")
            		// Добавляет класс к нужному пункту с соответствующим id 
            		$("#group-1-1").change().addClass("active")
   
            })
            two.events.add('click', function (e) {
            		$(".adress-point").removeClass("active")
            		$("#group-1-2").change().addClass("active")
   
            })
            three.events.add('click', function (e) {
            		$(".adress-point").removeClass("active")
            		$("#group-1-3").change().addClass("active")
   
            })
            four.events.add('click', function (e) {
            		$(".adress-point").removeClass("active")
            		$("#group-1-4").change().addClass("active")
   
            })
            five.events.add('click', function (e) {
            		$(".adress-point").removeClass("active")
            		$("#group-1-5").change().addClass("active")
   
            })
            six.events.add('click', function (e) {
            		$(".adress-point").removeClass("active")
            		$("#group-1-6").change().addClass("active")
   
            })


		};