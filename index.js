


$(function(){
  const refBut = $('<button class="refreshbut">Назад</button>')
  refBut.click(refreshPage)
  function refreshPage(){
    window.location.reload()
  }
  // 1 кнопка (Северная Америка)
  $( "#but-1" ).click(function(){ // задаем функцию при нажатиии на элемент с id but-1
      $( ".cards-row",).hide() //  скрываем элемент <div> с классом cards-row
      $('.title-text').hide()
      $('body').css('backgroundImage', 'url("./img/n-america.jpg")')
      $('body').css( 'minWidth','1200px')
      $('body').css( 'minHeight','1600px')
      // $('body').css('min-width','1600px')


      $('body').append(refBut)

      $('<button class="still-but">Скрыть/Показать дивы</button>').appendTo('body')
      // кнопка сокрытия/раскрытия
      $('.still-but').click(function() {
        $('.text-div, .but-div').toggle()
      })      
      $('body').append('<div class="text-div n-a"></div>')

      $('body').append('<div class="but-div b-n-a"></div>')



     
      let countries = [
                       {name: "США", area:"9 519 431 км2", lang: "Английский", capCity: "Вашигтон"},
                       {name: "Канада", area:"9 984 670 км2", lang: "Английский, Французкий", capCity: "Оттава"},
                       {name: "Мексико", area:"1 972 550 км2", lang: "Испанский", capCity: "Мехико"},
                       {name: "Гватемала", area:"108 890 км2", lang: "Испанский", capCity: "Гватемала"},
                       {name: "Куба", area:"110 860 км2", lang: "Испанский", capCity: "Гавана"},
                       {name: "Гренландия", area:"2 166 086 км2", lang: "Гренладский", capCity: "Нуук"},
                       {name: "1. Гаити", area: "27 750 км2", lang: "Гаитянский, Креольский, Французкий", capCity: "Порт-О-Пренс"},
                       {name: "2. Доминиканская Республика", area:"48 730 км2", lang: "Испанский", capCity: "Санто-Домиго"},
                       {name: "3. Белиз", area: "22 966 км2", lang: "Английский", capCity: "Бельмопан"},
                       {name: "4. Гондурас", area:"112 098 км2", lang: "Испанский", capCity: "Тегусигальпа"},
                       {name: "5. Сальвадор", area:"21 040 км2", lang: "Испанский", capCity: "Сан-Сальвадор"},
                       {name: "6. Коста-Рика", area:"51 100 км2", lang: "Испанский", capCity: "Сан-Хосе"},
                       {name: "7. Панама", area:"78 200 км2", lang: "Испанский", capCity: "Панама"}]
                       
      
      // Создаю такое коичество кнопок, которое равняется количеству стран в массиве 
      for (let i = 0; i < countries.length; i++) {
        let button = $('<button class="js-but">').appendTo('.but-div')
        button.text(countries[i].name)
        button.on('click', (function(country) {
          return function() {
            let cName = $('<h3>').appendTo('.text-div')
            cName.text("Страна: "  + country.name)
            let cCapCity = $('<p>').appendTo('.text-div')
            cCapCity.text("Столица: " + country.capCity)            
            let cArea = $('<p>').appendTo('.text-div')
            cArea.text("Площадь: " + country.area) 
            let cLang = $('<p>').appendTo('.text-div')
            cLang.text("Язык(и): " + country.lang)
          }
        })(countries[i]))
      }
    })
    // 2 кнопка(Европа)
    $( "#but-2" ).click(function(){ 
      $( ".cards-row" ).toggle() //  скрываем <div>
      $('.title-text').hide()
      $('body').css('backgroundImage', 'url("./img/eu.png")')
      $('body').css( 'minHeight','1075px')
      $('body').css( 'minWidth','1350px')

      $('body').append(refBut)
      // Побелить фон
      $('body').append('<div class="text-div eu"></div>')

      $('body').append('<div class="but-div b-eu"></div>')
      let countries = [
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "Россия", area:"17 233 900 км2", lang: "Русский(множество других в разных частях РФ)", capCity: "Москва"},
                       {name: "Германия", area:"375 000 км2", lang: "Немецкий", capCity: "Берлин"},
                       {name: "Украина", area:"504 000 км2", lang: "Украинский", capCity: "Киев"},
                       {name: "Франция", area:"547 000 км2", lang: "Французский", capCity: "Париж"},
                       {name: "Испания", area:"498 500 км2", lang: "Испанский", capCity: "Мадрид"},
                       {name: "Швеция", area:"449 900 км2", lang: "Шведский", capCity: "Стокгольм"},
                       {name: "Норвегия", area: "385 100 км2", lang: "Норвежский", capCity: "Осло"},
                       {name: "Финляндия", area:"337 000 км2", lang: "Финский, Шведский", capCity: "Хельсинки"},
                       {name: "Польша", area: "312 600 км2", lang: "Польский", capCity: "Варшава"},
                       {name: "Великобритания", area:"243 300 км2", lang: "Английский,(уэльский, шотландский,гэльский)", capCity: "Лондон"},
                       {name: "Исландия", area:"103 000 км2", lang: "Исландский,(английский)", capCity: "Рейкьявик"},
                       {name: "Дания", area:"43 000 км2", lang: "Датский", capCity: "Копенгаген"},
                       {name: "Чехия", area:"78 800 км2", lang: "Чешский", capCity: "Прага"},
                       {name: "Венгрия", area:"93 000 км2", lang: "Венгерский", capCity: "Будапешт"},
                       {name: "Австрия", area:"83 800 км2", lang: "Немецкий", capCity: "Вена"},
                       {name: "Италия", area:"301 200 км2", lang: "Итальский", capCity: "Рим"}, 
                       {name: "Румыния", area:"237 500 км2", lang: "Румынский", capCity: "Бухарест"},
                       {name: "Болгария", area:"110 900 км2", lang: "Болгарский", capCity: "София"},
                       {name: "Португалия", area:"92 300 км2", lang: "Португальский", capCity: "Лиссабон"},
                       {name: "Греция", area:"131 900 км2", lang: "Греческий", capCity: "Афины"},
                       {name: "Белоруссия", area:"207 600 км2", lang: "Белорусский(русский)", capCity: "Минск"},
                       {name: "Ватикан", area:"0,4 км2", lang: "Латинский,(итальянский)", capCity: "Ватикан"},
                       {name: "Андорра", area:"400 км2", lang: "Каталонский(испанский,французкий)", capCity: "Андорра-Ла-Велья"},
                       {name: "Монако", area:"2 км2", lang: "Французский(монегаскский)", capCity: "Монако"},
                       {name: "Мальта", area:"310 км2", lang: "Мальтийский, Английский", capCity: "Валлетта"},
                       {name: "Латвия", area:"64 500 км2", lang: "Латышский(русский)", capCity: "Рига"},
                       {name: "Литва", area:"65 200 км2", lang: "Литовский(русский)", capCity: "Вильнус"},
                       {name: "1. Эстония", area:"44 700 км2", lang: "Эстонский(русский)", capCity: "Таллин"},
                       {name: "2. Ирландия", area:"70 200 км2", lang: "Ирландский, английский,(гэльский)", capCity: "Дублин"},
                       {name: "3. Нидерланды", area:"41 500 км2", lang: "Голландский", capCity: "Амстердам"},
                       {name: "4. Белгия", area:"30 500 км2", lang: "Голландский, французский, немецкий", capCity: "Брюссель"},
                       {name: "5. Люксембург", area:"2 500 км2", lang: "Люксембургский,(немецкий,французский)", capCity: "Люксембург"},
                       {name: "6. Словакия", area:"49 000 км2", lang: "Словацкий", capCity: "Братислава"},
                       {name: "7. Молдавия", area:"33 700 км2", lang: "Молдаванский(румынский, русский)", capCity: "Кишинев"},
                       {name: "8. Швейцария", area:"41 200 км2", lang: "Французский, немецкий, итальянский", capCity: "Берн"},
                       {name: "9. Лихтенштейн", area:"162 км2", lang: "Немецкий", capCity: "Вадуц"},
                       {name: "10. Словения", area:"20 200 км2", lang: "Словенский", capCity: "Люблана"},
                       {name: "11. Хорватия", area:"56 500 км2", lang: "Хорватский", capCity: "Загреб"},
                       {name: "12. Босния и Герцеговина", area:"51 100 км2", lang: "Боснийский, сербский, хорватский", capCity: "Сараево"},
                       {name: "13.Сербия", area:"88 400 км2", lang: "Сербский", capCity: "Белград"},
                       {name: "14.Сан-Марино", area:"60 км2", lang: "Италянский", capCity: "Сан-Марино"},
                       {name: "15.Албания", area:"28 700 км2", lang: "Албанский", capCity: "Тирана"},
                       {name: "16. Северная Македония", area:"24 900 км2", lang: "Македонский", capCity: "Скопье"},]

                       
      
      // Создаю такое коичество кнопок, которое равняется количеству стран в массиве 
      for (let i = 0; i < countries.length; i++) {
        let button = $('<button class="js-but">').appendTo('.but-div')
        button.text(countries[i].name)
        button.on('click', (function(country) {
          return function() {
            let cName = $('<h3>').appendTo('.text-div')
            cName.text("Страна: "  + country.name)
            let cCapCity = $('<p>').appendTo('.text-div')
            cCapCity.text("Столица: " + country.capCity)            
            let cArea = $('<p>').appendTo('.text-div')
            cArea.text("Площадь: " + country.area) 
            let cLang = $('<p>').appendTo('.text-div')
            cLang.text("Язык(и): " + country.lang)
          }
        })(countries[i]))
      }
    })
    // 3 кнопка(Азия)
    $( "#but-3" ).click(function(){
      $( ".cards-row" ).hide()
      $('.title-text').hide()

      $('body').css('backgroundImage', 'url("./img/asia.jpg")')
      $('body').css( 'minHeight','1545px')
      $('body').css( 'minWidth','1950px')

      $('body').append(refBut)
      //фон
      $('body').append('<div class="text-div as"></div>')
      $('body').append('<div class="but-div b-as"></div>')
      let countries = [
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "Азербайджан", area:"86 600 км2", lang: "Азербайджанский", capCity: "Баку"},
                       {name: "Армения", area:"29 800 км2", lang: "Армянский", capCity: "Ереван"},
                       {name: "Грузия", area:"69 700 км2", lang: "Грузинский", capCity: "Тбилиси"},
                       {name: "Иордания", area:"92 300 км2", lang: "Арабский", capCity: "Амман"},
                       {name: "Ирак", area: "437 072 км2", lang: "Арабский и курдский", capCity: "Багдад"},
                       {name: "Иран", area:"1 648 000 км2", lang: "Персидский", capCity: "Тегеран"},
                       {name: "Йемен", area: "527 970  км2", lang: "Арабский", capCity: "Сана"},
                       {name: "Кипр", area:"9 250 км2", lang: "Греческий, турецкий", capCity: "Никосия"},
                       {name: "Саудовская Аравия", area:"2 218 000 км2", lang: "Арабский", capCity: "Эр-Рияд"},
                       {name: "Сирия", area:"185 180 км2", lang: "Арабский", capCity: "Дамаск"},
                       {name: "Казахстан", area:"	2 724 902км2", lang: "Казахский, русский", capCity: "Астана"},
                       {name: "Кыргызстан", area:"199 951 км2", lang: "Киргизский, русский", capCity: "Бишкек"},
                       {name: "Таджикистан", area:"142 000 км2", lang: "Таджикский, узбекский", capCity: "Душанбе"},
                       {name: "Туркменистан", area:"491 200 км2", lang: "Туркменский", capCity: "Ашхабад"},
                       {name: "Узбекистан", area:"447 400 км2", lang: "Узбекский", capCity: "Ташкент"},
                       {name: "Афганистан", area:"652 864 км2", lang: "Пушту, дари", capCity: "Кабул"},
                       {name: "Бангладеш", area:"144 000 км2", lang: "Бенгальский", capCity: "Дакка"},
                       {name: "Бутан", area:"47 000 км2", lang: "Дзонг-кэ, английский", capCity: "Тхимпху"},
                       {name: "Индия", area:"3 287 590 км2", lang: "Хинди, английский", capCity: "Нью-Дели"},
                       {name: "Мальдивы", area:"298 км2", lang: "Дивехи", capCity: "Мале"},
                       {name: "Непал", area:"140 800 км2", lang: "Непальский", capCity: "Катманду"},
                       {name: "Пакистан", area:"803 940 км2", lang: "Урду, английский", capCity: "Исламабад"},
                       {name: "Шри-Ланка", area:"65 610 км2", lang: "Сингальский, тамильский", capCity: "Шри-Джаяварденепура-Котте"},
                       {name: "Китай", area:"9 596 960 км2", lang: "Китайский", capCity: "Пекин"},
                       {name: "Северная Корея", area:"120 540 км2", lang: "Корейский", capCity: "Пхеньян"},
                       {name: "Южная Корея", area:"99 274 км2", lang: "Корейский", capCity: "Сеул"},
                       {name: "Монголия", area:"1 564 116 км2", lang: "Монгольский", capCity: "Улан-Батор"},
                       {name: "Япония", area:"377 835 км2", lang: "Японский", capCity: "Токио"},
                       {name: "Вьетнам", area:"329 560 км2", lang: "Вьетнамский", capCity: "Ханой"},
                       {name: "Индонезия", area:"1 919 460 км2", lang: "Индонезийский", capCity: "Джакарта"},
                       {name: "Камбоджа", area:"181 040 км2", lang: "Кхмерский", capCity: "Пномпень"},
                       {name: "Лаос", area:"236 800 км2", lang: "Лаосский", capCity: "Вьентьян"},
                       {name: "Малайзия", area:"329 758 км2", lang: "Малайский", capCity: "Куала-Лумпур"},
                       {name: "Мьянма", area:"678 500 км2", lang: "Бирманский", capCity: "Нейпьидо"},
                       {name: "Сингапур", area:"692,7 км2", lang: "Английский,китайский,малайский,тамильский", capCity: "Сингапур"},
                       {name: "Таиланд", area:"514 000 км2", lang: "Тайский", capCity: "Бангкок"},
                       {name: "Восточный Тимор", area:"15 007 км2", lang: "Тетум, португальский", capCity: "Дили"},
                       {name: "Филиппины", area:"300 000 км2", lang: "Тагалог, филиппинский, английский", capCity: "Манила"},
                       {name: "1. Ливан", area:"10 452 км2", lang: "Арабский", capCity: "Бейрут"},
                       {name: "2. Израиль", area:"20 770 км2", lang: "Иврит и арабский", capCity: "Иерусалим"},                       
                       {name: "3. Палестина", area:"6020 км2", lang: "Арабский", capCity: "Рамалла"},
                       {name: "4. Кувейт", area:"17 818 км2", lang: "Арабский", capCity: "Эль-Кувейт"},
                       {name: "5. Бахрейн", area:"765 км2", lang: "Арабский", capCity: "Манама"},                        
                       {name: "6. Катар", area:"11 437 км2", lang: "Арабский", capCity: "Доха"},      
                       {name: "7. ОАЭ", area:"83 600 км2", lang: "Арабский, английский", capCity: "Абу-Даби"},                       
                       {name: "8. Бруней", area:"5 770 км2", lang: "Малайский", capCity: "Бандар-Сери-Бегаван"},                       
                      ]
                       
      
      // Создаю такое коичество кнопок, которое равняется количеству стран в массиве 
      for (let i = 0; i < countries.length; i++) {
        let button = $('<button class="js-but">').appendTo('.but-div')
        button.text(countries[i].name)
        button.on('click', (function(country) {
          return function() {
            let cName = $('<h3>').appendTo('.text-div')
            cName.text("Страна: "  + country.name)
            let cCapCity = $('<p>').appendTo('.text-div')
            cCapCity.text("Столица: " + country.capCity)            
            let cArea = $('<p>').appendTo('.text-div')
            cArea.text("Площадь: " + country.area) 
            let cLang = $('<p>').appendTo('.text-div')
            cLang.text("Язык(и): " + country.lang)
          }
        })(countries[i]))
      }
    })
    // 4 кнопка(Южная Америка)
    $( "#but-4" ).click(function(){
      $( ".cards-row" ).hide()
      $('.title-text').hide()
      $('body').css('backgroundImage', 'url("./img/s-america.jpg")')
      $('body').css( 'minHeight','1600px')
      $('body').css( 'minWidth','1200px')

      $('body').append(refBut)
      //фон
      $('body').append('<div class="text-div s-a"></div>')
      $('body').append('<div class="but-div b-s-a"></div>')
      let countries = [
                       {name: "Аргентина", area:"2 766 890 км2", lang: "Испанский", capCity: "Буэнос-Айрес"},
                       {name: "Бразилия", area:"8 514 877 км2", lang: "Португальский", capCity: "Бразилиа"},
                       {name: "Боливия", area:"1 098 581 км2", lang: "Испанский, кечуа, аймара,и еще 34 языка", capCity: "Ла-Пас, Сукре	"},
                       {name: "Венесуэла", area:"916 445 км2", lang: "Испанский", capCity: "Каракас"},
                       {name: "Гайана", area:"214 970 км2", lang: "Английский", capCity: "Джорджтаун"},
                       {name: "Колумбия", area:"1 138 910 км2", lang: "Испанский", capCity: "Санта-Фе-Де-Богота"},
                       {name: "Парагвай", area: "406 752 км2", lang: "Испанский,гуарани", capCity: "Асунсьон"},
                       {name: "Перу", area:"1 285 220 км2", lang: "Испанский,кечуа", capCity: "Лима"},
                       {name: "Суринам", area: "163 270 км2", lang: "Нидердандский", capCity: "Парамарибо"},
                       {name: "Уругвай", area:"176 220 км2", lang: "Испанский", capCity: "Монтевидео"},
                       {name: "Чили", area:"756 950 км2", lang: "Испанский", capCity: "Сантьяго"},
                       {name: "Эквадор", area:"283 560 км2", lang: "Испанский", capCity: "Кито"},
                       {name: "Французская Гвиана", area:"86 504 км2", lang: "Французский", capCity: "Кайенна"},
                       {name: "Гренада", area:"344 км2", lang: "Английский", capCity: "Сент-Джорс"},
                       {name: "Тринидад и Тобаго", area:"5 128  км2", lang: "Английский", capCity: "Порт-Оф-Спейн"}]
                       
      
      // Создаю такое коичество кнопок, которое равняется количеству стран в массиве 
      for (let i = 0; i < countries.length; i++) {
        let button = $('<button class="js-but">').appendTo('.but-div')
        button.text(countries[i].name)
        button.on('click', (function(country) {
          return function() {
            let cName = $('<h3>').appendTo('.text-div')
            cName.text("Страна: "  + country.name)
            let cCapCity = $('<p>').appendTo('.text-div')
            cCapCity.text("Столица: " + country.capCity)            
            let cArea = $('<p>').appendTo('.text-div')
            cArea.text("Площадь: " + country.area) 
            let cLang = $('<p>').appendTo('.text-div')
            cLang.text("Язык(и): " + country.lang)
          }
        })(countries[i]))
      }
    })
    // 5 кнопка(Африка)
    $( "#but-5" ).click(function(){
      $( ".cards-row" ).hide()
      $('.title-text').hide()
      $('body').css('backgroundImage', 'url("./img/africa.jpg")')
      $('body').css( 'minHeight','1600px')
      $('body').css( 'minWidth','1200px')

      $('body').append(refBut)
      //фон
      $('body').append('<div class="text-div af"></div>')
      $('body').append('<div class="but-div b-af"></div>')
      let countries = [
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "#", area:"#", lang: "#", capCity: "#"},
                       {name: "Алжир", area:"2 381 740 км2", lang: "Арабский", capCity: "Алжир"},
                       {name: "Ангола", area:"1 246 700 км2", lang: "Португальский", capCity: "Луанда"},
                       {name: "Бенин", area:"112 622 км2", lang: "Французский", capCity: "Порто-Ново, Котону	"},
                       {name: "Ботствана", area:"581 726 км2", lang: "Английский, сетсвана", capCity: "Габороне"},
                       {name: "Буркино-Фасо", area:"274 000 км2", lang: "Французский", capCity: "Уагадугу"}, 
                       {name: "Габон", area: "267 668	 км2", lang: "Французский", capCity: "Либервиль"},
                       {name: "Гана", area: "238 534 км2", lang: "Английский", capCity: "Аккра"},
                       {name: "Гвинеа", area:"245 857 км2", lang: "Французский", capCity: "Конакри"},
                       {name: "Демократическая Республика Конго", area:"2 344 858	км2", lang: "Французский", capCity: "Киншаса"},
                       {name: "Египет", area:"1 001 449	км2", lang: "Арабский", capCity: "Каир"},
                       {name: "Замбия", area:"752 614 км2", lang: "Английский", capCity: "Лусака"},
                       {name: "Западная Сахара", area:"267 405 км2", lang: "Арабский", capCity: "Эль-Аюн, Тифарити"},
                       {name: "Зимбабве", area:"390 757 км2", lang: "Английский", capCity: "Хараре"},
                       {name: "Кабо-Верде", area:"4033 км2", lang: "Португальский", capCity: "Прая"},
                       {name: "Камерун", area:"475 442 км2", lang: "Английский, французский", capCity: "Яунде"},
                       {name: "Кения", area:"580 367	км2", lang: "Английский, суахили", capCity: "Найроби"},
                       {name: "Коморские острова", area:"2235 км2", lang: "Арабский, коморский, французский", capCity: "Морони"},
                       {name: "Кот-д’Ивуар", area:"322 460 км2", lang: "Французский", capCity: "Ямусукро"},
                       {name: "Либерия", area:"111 369 км2", lang: "Английский", capCity: "Монровия"},
                       {name: "Ливия", area:"1 759 540 км2", lang: "Арабский", capCity: "Триполи"},
                       {name: "Мавритания", area:"1 030 700 км2", lang: "Арабский", capCity: "Нуакшот"},
                       {name: "Мадагаскар", area:"587 041	км2", lang: "Малагасийский, французский", capCity: "Антананариву"},
                       {name: "Мали", area:"1 240 192 км2", lang: "Французский", capCity: "Бамако"},
                       {name: "Марокко", area:"446 550 км2", lang: "Арабский", capCity: "Рабат"},
                       {name: "Мозамбик", area:"801 590 км2", lang: "Португальский", capCity: "Мапуту"},
                       {name: "Намибия", area:"825 418 км2", lang: "Английский", capCity: "Виндхук"},
                       {name: "Нигер", area:"1 267 000 км2", lang: "Французский", capCity: "Ниамей"},
                       {name: "Нигерия", area:"923 768 км2", lang: "Английский", capCity: "Абуджа"},
                       {name: "Республика Конго", area:"342 000 км2", lang: "Французский", capCity: "Браззавиль"},
                       {name: "Сейшельские острова", area:"451 км2", lang: "Английский, креольский, французский", capCity: "Виктория"},
                       {name: "Сенегал", area:"196 723 км2", lang: "Французский", capCity: "Дакар"},
                       {name: "Сомали", area:"637 657 км2", lang: "Сомали, арабский", capCity: "Могадишо"},
                       {name: "Судан", area:"1 886 068 км2", lang: "Арабский", capCity: "Хартум"},
                       {name: "Танзания", area:"945 087 км2", lang: "Суахили, английский", capCity: "Дар-Эс-Салам, Додома"},
                       {name: "Того", area:"56 785 км2", lang: "Французский", capCity: "Ломе"},
                       {name: "Тунис", area:"163 610 км2", lang: "Арабский", capCity: "Тунис"},
                       {name: "Уганда", area:"236 040 км2", lang: "Английский, суахили", capCity: "Кампала"},
                       {name: "Центральная Африка", area:"622 984	 км2", lang: "Санго, французский", capCity: "Банги"},
                       {name: "Чад", area:"1 284 000	км2", lang: "Арабский, французский", capCity: "Нджамена"},
                       {name: "Эритрея", area:"117 600 км2", lang: "Арабский, тигринья", capCity: "Асмэра"},
                       {name: "Эфиопия", area:"1 104 300 км2", lang: "Амхарский", capCity: "Аддис-Абеба"},
                       {name: "Южная Африка", area:"1 221 037 км2", lang: "Английский, африкаанс и др.", capCity: "Кейптаун, Претория, Блумфотейн"},
                       {name: "Южный Судан", area:"619 745 км2", lang: "Английский", capCity: "Джуба"},
                       {name: "1. Гамбия", area:"10 380 км2", lang: "Английский", capCity: "Банжул"},
                       {name: "2. Гвинеа-Бисау", area:"36 125 км2", lang: "Португальский", capCity: "Бисау"},
                       {name: "3. Сьерра-Леоне", area:"71 740 км2", lang: "Английский", capCity: "Фритаун"},
                       {name: "4. Сан-Томе и Принсипи", area:"964 км2", lang: "Португальский", capCity: "Сан-Томе"},
                       {name: "5. Экваториальная Гвинея", area:"28 051	км2", lang: "Испанский, французский", capCity: "Малабо"},
                       {name: "6. Джибути", area:"23 200 км2", lang: "Арабский, французский", capCity: "Джибути"},
                       {name: "7. Руанда", area:"26 798 км2", lang: "Английский, руанда, французский,", capCity: "Кигали"},
                       {name: "8. Бурунди", area:"27 830 км2", lang: "Кирунди, французский", capCity: "Гитега"},
                       {name: "9. Малави", area:"118 484 км2", lang: "Английский, чичева", capCity: "Лилонгве"},
                       {name: "10.Эсватини", area:"17 364 км2", lang: "Английский, свати", capCity: "Мбане, Ломамба"},
                       {name: "11. Лесото", area:"30 355 км2", lang: "Английский, сесото", capCity: "Масеру"},]

                       
      
      // Создаю такое коичество кнопок, которое равняется количеству стран в массиве 
      for (let i = 0; i < countries.length; i++) {
        let button = $('<button class="js-but">').appendTo('.but-div')
        button.text(countries[i].name)
        button.on('click', (function(country) {
          return function() {
            let cName = $('<h3>').appendTo('.text-div')
            cName.text("Страна: "  + country.name)
            let cCapCity = $('<p>').appendTo('.text-div')
            cCapCity.text("Столица: " + country.capCity)            
            let cArea = $('<p>').appendTo('.text-div')
            cArea.text("Площадь: " + country.area) 
            let cLang = $('<p>').appendTo('.text-div')
            cLang.text("Язык(и): " + country.lang)
          }
        })(countries[i]))
      }
    })
    // 6 кнопка(Астралия и Океания)
    $( "#but-6" ).click(function(){
      $( ".cards-row" ).hide()
      $('.title-text').hide()
      $('body').css('backgroundImage', 'url("./img/australia.jpg")')
      $('body').css( 'minHeight','1345px')
      $('body').css( 'minWidth','1250px')

      $('body').append(refBut)
      //фон
      $('body').append('<div class="text-div au"></div>')
      $('body').append('<div class="but-div b-au"></div>')
      let countries = [
                       {name: "Австралия", area:"7 692 024 км2", lang: "Английский", capCity: "Канберра"},
                       {name: "Вануату", area:"12 190 км2", lang: "Английский, французский, креольский", capCity: "Порт-Вила"},
                       {name: "Папуа—Новая Гвинея", area:"462 840 км2", lang: "Английский, ток-писин, хири-моту", capCity: "Порт-Морсби "},
                       {name: "Соломоновы Острова", area:"28 450 км2", lang: "Английский, креольский", capCity: "Хониара"},
                       {name: "Фиджи", area:"18 274 км2", lang: "Английский, фиджийский", capCity: "Сува"},
                       {name: "Кирибати", area:"812 км2", lang: "Английский, кирибати", capCity: "Южная Тарава"},
                       {name: "Федеративные Штаты Микронезии", area: "702	км2", lang: "английский", capCity: "Паликир"},
                       {name: "Науру", area:"21 км2", lang: "Науранский, английский", capCity: "нет"},
                       {name: "Маршалловы Острова", area: "181 км2", lang: "Маршалловый, английский", capCity: "Маджуро"},
                       {name: "Палау", area:"458 км2", lang: "Палуанский, английский", capCity: "Нгерулмуд"},
                       {name: "Острова Кука", area:"236,7 км2", lang: "Кукский, английский", capCity: "Аваруа"},
                       {name: "Французская Полинезия", area:"4 167 км2", lang: "Французский, таитянский", capCity: "Папеэте"},
                       {name: "Самоа", area:"2 935 км2", lang: "Самоанский, английский", capCity: "Апиа"},
                       {name: "Тонга", area:"748 км2", lang: "Тонганский, английский", capCity: "Нукуалофа"},
                       {name: "Тувалу", area:"26 км2", lang: "Тувалу, английский", capCity: "Фунафути"}]
                       
      
      // Создаю такое коичество кнопок, которое равняется количеству стран в массиве 
      for (let i = 0; i < countries.length; i++) {
        let button = $('<button class="js-but">').appendTo('.but-div')
        button.text(countries[i].name)
        button.on('click', (function(country) {
          return function() {
            let cName = $('<h3>').appendTo('.text-div')
            cName.text("Страна: "  + country.name)
            let cCapCity = $('<p>').appendTo('.text-div')
            cCapCity.text("Столица: " + country.capCity)            
            let cArea = $('<p>').appendTo('.text-div')
            cArea.text("Площадь: " + country.area) 
            let cLang = $('<p>').appendTo('.text-div')
            cLang.text("Язык(и): " + country.lang)
          }
        })(countries[i]))
      }
    })
}) 
