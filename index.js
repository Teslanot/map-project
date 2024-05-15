import {countries} from './countries.js'
// Основная вункция
$(function(){

  // Функция для кнопки "Назад"
  const refBut = $('<button class="refreshbut">Назад</button>')
  refBut.click(refreshPage)
  function refreshPage(){
    window.location.reload()
  }      
  //Функция для создание кнопок по данным из массива 
  function countyBut(start,end){
    for (start; start < end; start++) {
      let button = $('<button class="js-but">').appendTo('.but-div')
      button.text(countries[start].name)
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
      })(countries[start]))
      }
  }
  // 1 кнопка (Северная Америка)
  $( "#but-1" ).click(function(){ // задаем функцию при нажатиии на элемент с id but-1
      $( ".cards-row",).hide() //  скрываем элемент <div> с классом cards-row
      $('.title-text').hide()
      $('body').css('backgroundImage', 'url("./img/n-america.jpg")')
      $('body').css( 'minWidth','1200px')
      $('body').css( 'minHeight','1600px')

      $('body').append(refBut)

      $('<button class="still-but">Скрыть/Показать дивы</button>').appendTo('body')
      // кнопка сокрытия/раскрытия
      $('.still-but').click(function() {
        $('.text-div, .but-div').toggle()
      })      
      $('body').append('<div class="text-div n-a"></div>')

      $('body').append('<div class="but-div b-n-a"></div>')


    countyBut(0,13)
    })
    // 2 кнопка(Европа)
    $( "#but-2" ).click(function(){ 
      $( ".cards-row" ).toggle() //  скрываем <div>
      $('.title-text').hide()
      $('body').css('backgroundImage', 'url("./img/eu.png")')
      $('body').css( 'minHeight','1075px')
      $('body').css( 'minWidth','1350px')

      $('body').append(refBut)
      // Div для текстов(стран) с фонами
      $('body').append('<div class="text-div eu"></div>')

      $('body').append('<div class="but-div b-eu"></div>')
                   
    countyBut(14,88)
    })
    // 3 кнопка(Азия)
    $( "#but-3" ).click(function(){
      $( ".cards-row" ).hide()
      $('.title-text').hide()

      $('body').css('backgroundImage', 'url("./img/asia.jpg")')
      $('body').css( 'minHeight','1545px')
      $('body').css( 'minWidth','1950px')

      $('body').append(refBut)
      //Div для текстов(стран) с фонами
      $('body').append('<div class="text-div as"></div>')
      $('body').append('<div class="but-div b-as"></div>')
      
      countyBut(90,174)
    })
    // 4 кнопка(Южная Америка)
    $( "#but-4" ).click(function(){
      // скрвыаю ненужные дивы
      $( ".cards-row" ).hide()
      $('.title-text').hide()
      // добавляю карту и нужные дивы
      $('body').css('backgroundImage', 'url("./img/s-america.jpg")')
      $('body').css( 'minHeight','1600px')
      $('body').css( 'minWidth','1200px')

      $('body').append(refBut)
      //Div для текстов(стран) с фонами
      $('body').append('<div class="text-div s-a"></div>')
      $('body').append('<div class="but-div b-s-a"></div>')

      countyBut(175,189)

    })
    // 5 кнопка(Африка)
    $( "#but-5" ).click(function(){
      $( ".cards-row" ).hide()
      $('.title-text').hide()
      $('body').css('backgroundImage', 'url("./img/africa.jpg")')
      $('body').css( 'minHeight','1600px')
      $('body').css( 'minWidth','1200px')

      $('body').append(refBut)
      //Div для текстов(стран) с фонами
      $('body').append('<div class="text-div af"></div>')
      $('body').append('<div class="but-div b-af"></div>')

      countyBut(190,283)
    })
    // 6 кнопка(Астралия и Океания)
    $( "#but-6" ).click(function(){
      $( ".cards-row" ).hide()
      $('.title-text').hide()
      $('body').css('backgroundImage', 'url("./img/australia.jpg")')
      $('body').css( 'minHeight','1345px')
      $('body').css( 'minWidth','1250px')

      $('body').append(refBut)
      //Div для текстов(стран) с фонами
      $('body').append('<div class="text-div au"></div>')
      $('body').append('<div class="but-div b-au"></div>')

      countyBut(284,298)
    })
}) 
