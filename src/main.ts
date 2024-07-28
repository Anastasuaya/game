import './style.css'

// Получаем элементы модального окна и кнопок
    // const modal = document.getElementById('modal') as HTMLDivElement
    // const yesButton = document.getElementById('yesbutton') as HTMLButtonElement
    // const noButton = document.getElementById('nobutton') as HTMLButtonElement

    // const objgame = document.getElementById('objgame') as HTMLDivElement

            // Получаем элемент, который будет прыгать 
const jumpingElement = document.getElementById('jumpingElement') as HTMLDivElement

document.addEventListener('DOMContentLoaded', () => {

    // Показать модальное окно на загрузке страницы, скрыть объекты
    // modal.style.display = 'flex'
    // objgame.style.display = 'none'

    // Обработчик события клика на кнопку "Да"
    // yesButton.addEventListener('click', () => {
    //     modal.style.display = 'none' // Скрыть модальное окно
    //     objgame.style.display = 'block' // показать объекты

//  const container = document.getElementById('container') as HTMLDivElement

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
        jumpingElement.style.transform = (`scaleX(1)`)
        jumpingElement.style.left = x + "px"
    }  else if (e.code == 'ArrowLeft') {
        x -= 50
        jumpingElement.style.transform = (`scaleX(-1)`)
        jumpingElement.style.left = x + "px"

    }  else if (e.code == 'Space') { 
        e.preventDefault()
        // Добавляем класс для анимации прыжка 
        jumpingElement.classList.add('jump')
        // Удаляем класс после завершения анимации 
        setTimeout(() => {jumpingElement.classList.remove('jump') }, 500) // Длительность анимации в миллисекундах 
    } 

})

})




