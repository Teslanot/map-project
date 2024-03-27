$(function(){
    $( "#but-1" ).click(function(){ // задаем функцию при нажатиии на элемент с классом toggle
      $( ".cards-row" ).toggle() //  скрываем, или отображаем все элементы <div>
      $('body').css('backgroundImage', 'none')
    })
    $( "#but-2" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
      $( ".text" ).slideToggle() // плавно скрываем, или отображаем все элементы <div>
    })
}) 
