import './style.css'


const catGirl = document.getElementById('catGirl') as HTMLImageElement


document.addEventListener ('keydown', (e) => {

    let catGirlCharsCoords = catGirl.getBoundingClientRect()
    let catGirlX = catGirlCharsCoords.x
    let catGirlY = catGirlCharsCoords.y

    
    if (catGirlX > document.documentElement.clientWidth - catGirl.offsetWidth) catGirlX = document.documentElement.clientWidth - catGirl.offsetWidth
    if (catGirlX < 0) catGirlX = 0
    if (catGirlY < 0) catGirlY = 0
    if (catGirlY > document.documentElement.clientHeight - catGirl.offsetHeight) catGirlY = document.documentElement.clientHeight - catGirl.offsetHeight
    if (e.code == 'ArrowRight') {
        catGirlX += 50
    }  else if (e.code == 'ArrowLeft') {
        catGirlX -= 50
    } else if (e.code === 'Space') { 
        catGirl.classList.add('jump')
         setTimeout(() => { 
            catGirl.classList.remove('jump') 
 }, 500)
    }
    catGirl.style.left = catGirlX + "px"
    catGirl.style.top = catGirlY + "px"
})


// Получаем элемент, который будет прыгать 
// const jumpingElement = document.getElementById('jumpingElement'); 
 
// Функция для обработки нажатия клавиши 
// function handleKeyPress(event) { 
 // Проверяем, что нажата клавиша пробела 
//  if (event.code === 'Space') { 
 // Добавляем класс для анимации прыжка 
//  jumpingElement.classList.add('jump'); 
 
 // Удаляем класс после завершения анимации 
//  setTimeout(() => { 
//  jumpingElement.classList.remove('jump'); 
//  }, 500); // Длительность анимации в миллисекундах (здесь 500 мс) 
//  } 
// } 
 
// Добавляем обработчик события на нажатие клавиши 
// document.addEventListener('keydown', handleKeyPress);

// css: 
// #jumpingElement { 
//  width: 50px; 
//  height: 50px; 
//  background-color: red; 
//  position: relative; 
//  top: 0; 
//  transition: top 0.5s; /* Длительность анимации */ 
// } 
 
// #jumpingElement.jump { 
//  top: -100px; /* Высота прыжка */ 
// }

// let jump = false

// let jumpCount = 0
// let jumpLength = 40
// let jumpHeight = 0

//  function getJump() {
//     jumpCount++;
//     jumpHeight = 4 * jumpLength * Math.sin(Math.PI * jumpCount / jumpLength);

// if (jumpCount > jumpLength) {
//     jumpHeight = 0;
//     jump = false;
//     jumpCount = 0;
// }
// }

// document.addEventListener('keydown', (e) => {
//     let  jumpPressed = false
//     if (e.code == 'Space') jumpPressed = true

// })


// document.addEventListener('keyup', (e) => {
//     let jump = false

//     if(e.code == 'Space') {
//         jump = true
//         catGirl.animate({top: -100}, {duration: 300})
//         catGirl.animate ({top: 0})
//     } else {
//         jump = false
//     }
// })



// document.keyup(function(e){
//     if (e.keyCode == 32) {
//         jump = true;
//         $('#circle').animate({ top: -100 }, {duration: 300});
//         $('#circle').animate({ top: 0 }, {duration: 300}, function(){
//             jump = false;
//         }



// document.addEventListener ('keydown', (e) => {
//     let catGirlCharsCoords = catGirl.getBoundingClientRect()
//     let catGirlY = catGirlCharsCoords.y

//     if(catGirlY < 0) catGirlY = 0
//     if(catGirlY > document.documentElement.clientHeight - catGirl.offsetHeight) catGirlY = document.documentElement.clientHeight - catGirl.offsetHeight
//     if (e.code == 'Space') {
//         catGirlY -= 50
//     }
//     catGirl.style.top = catGirlY + "px"
// })