$(function(){
    $( "#but-1" ).click(function(){ // задаем функцию при нажатиии на элемент с классом toggle
      $( ".cards-row" ).toggle() //  скрываем, или отображаем все элементы <div>
      $('body').css('backgroundImage', 'url("./img/n-america.jpg")')
      $('body').css('height','1600px')
      // Побелить фон
      $('body').append('<div class="text-div"></div>')
      // $('div').css('background-color', 'white').css('width', '100%');
      

      $('body').append('<div class="but-div"></div>')
      let countries = [{name: "Гаити", area: "27 750 км2", lang: "Гаитянский, Креольский, Французкий", capCity: "Порт-О-Пренс"},
                       {name: "Доминиканская Республика", area:"48 730 км2", lang: "Испанский", capCity: "Санто-Домиго"},
                       {name: "Белиз", area: "22 966 км2", lang: "Английский", capCity: "Бельмопан"},
                       {name: "Гондурас", area:"112 098 км2", lang: "Испанский", capCity: "Тегусигальпа"},
                       {name: "Сальвадор", area:"21 040 км2", lang: "Испанский", capCity: "Сан-Сальвадор"},
                       {name: "Коста-Рика", area:"51 100 км2", lang: "Испанский", capCity: "Сан-Хосе"},
                       {name: "Панама", area:"78 200 км2", lang: "Испанский", capCity: "Панама"},
                       {name: "США", area:"9 519 431 км2", lang: "Английский", capCity: "Вашигтон"},
                       {name: "Канада", area:"9 984 670 км2", lang: "Английский, Французкий", capCity: "Оттава"},
                       {name: "Мексико", area:"1 972 550 км2", lang: "Испанский", capCity: "Мехико"},
                       {name: "Гватемала", area:"108 890 км2", lang: "Испанский", capCity: "Гватемала"},
                       {name: "Куба", area:"110 860 км2", lang: "Испанский", capCity: "Гавана"},
                       {name: "Гренландия", area:"2 166 086 км2", lang: "Гренладский", capCity: "Нуук"}]
      
      // Создать 10 кнопок
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
      // Позиционировать кнопки
      $('input').css({
        'margin':'5px'
      })
    })
    $( "#but-2" ).click(function(){ 
      $( ".text" ).slideToggle() 
    })
}) 
