import './style.css'

// Получаем элемент, который будет прыгать 
const jumpingElement = document.getElementById('jumpingElement') as HTMLDivElement

    jumpingElement.style.marginTop = '100px'

 
// Функция для обработки нажатия клавиши 
document.addEventListener('keydown' ,(e) => { 
    let jumpingCharsCoords = jumpingElement.getBoundingClientRect()
    let x = jumpingCharsCoords.x
    let y = jumpingCharsCoords.y

    if (x > document.documentElement.clientWidth - jumpingElement.offsetWidth) x = document.documentElement.clientWidth - jumpingElement.offsetWidth
    if (x < 0) x = 0
    if (y < 0) y = 0
    if (y > document.documentElement.clientHeight - jumpingElement.offsetHeight) y = document.documentElement.clientHeight - jumpingElement.offsetHeight
    if (e.code == 'ArrowRight') {
        x += 50
        jumpingElement.style.left = x + "px"
    }  else if (e.code == 'ArrowLeft') {
        x -= 50
        jumpingElement.style.left = x + "px"
    }  else if (e.code == 'Space') { 
        e.preventDefault()
        // Добавляем класс для анимации прыжка 
        jumpingElement.classList.add('jump')
        // Удаляем класс после завершения анимации 
        setTimeout(() => {jumpingElement.classList.remove('jump') }, 500) // Длительность анимации в миллисекундах 
    } 

})







