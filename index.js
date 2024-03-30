$(function(){
  // 1 кнопка (Северная Америка)
    $( "#but-1" ).click(function(){ // задаем функцию при нажатиии на элемент с классом toggle
      $( ".cards-row" ).toggle() //  скрываем, или отображаем все элементы <div>
      $('body').css('backgroundImage', 'url("./img/n-america.jpg")')
      $('body').css('height','350px')
      //фон
      $('body').append('<div class="text-div-n-a"></div>')


      $('body').append('<div class="but-div-n-a"></div>')
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
        let button = $('<button class="js-but">').appendTo('.but-div-n-a')
        button.text(countries[i].name)
        button.on('click', (function(country) {
          return function() {
            let cName = $('<h3>').appendTo('.text-div-n-a')
            cName.text("Страна: "  + country.name)
            let cCapCity = $('<p>').appendTo('.text-div-n-a')
            cCapCity.text("Столица: " + country.capCity)            
            let cArea = $('<p>').appendTo('.text-div-n-a')
            cArea.text("Площадь: " + country.area) 
            let cLang = $('<p>').appendTo('.text-div-n-a')
            cLang.text("Язык(и): " + country.lang)
          }
        })(countries[i]))
      }
      // Позиционировать кнопки
      $('input').css({
        'margin':'5px'
      })
    })
    // 2 кнопка(Европа)
    $( "#but-2" ).click(function(){ 
      $( ".cards-row" ).toggle() //  скрываем, или отображаем все элементы <div>
      $('body').css('backgroundImage', 'url("./img/eu.png")')
      $('body').css('height','1060px')
      // Побелить фон
      $('body').append('<div class="text-div-eu"></div>')

      $('body').append('<div class="but-div-eu"></div>')
      let countries = [
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
        let button = $('<button class="js-but">').appendTo('.but-div-eu')
        button.text(countries[i].name)
        button.on('click', (function(country) {
          return function() {
            let cName = $('<h3>').appendTo('.text-div-eu')
            cName.text("Страна: "  + country.name)
            let cCapCity = $('<p>').appendTo('.text-div-eu')
            cCapCity.text("Столица: " + country.capCity)            
            let cArea = $('<p>').appendTo('.text-div-eu')
            cArea.text("Площадь: " + country.area) 
            let cLang = $('<p>').appendTo('.text-div-eu')
            cLang.text("Язык(и): " + country.lang)
          }
        })(countries[i]))
      }
    })
}) 
