import './style.css'

// Получаем элемент, который будет прыгать 
const jumpingElement = document.getElementById('jumpingElement') as HTMLDivElement

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

// document.addEventListener('DOMContentLoaded', () => {

    // Функция для обработки пересечения    
// const handleIntersection = (entries: any) => {
    // entries.forEach(entry => {
        // if (!entry.isIntersecting) {
        // если элемент не пересекается с контейнером, то падает
            // jumpingElement.style.top = '150px';
        // }
    // })
// }
        // Создаем Intersection Observer
        // const observer = new IntersectionObserver(handleIntersection, {
            // root: container,
            // threshold: 1.0 // Adjust the threshold as needed
        // })

         // Observe the falling element
    // observer.observe(jumpingElement)

    // Optionally, move the element to simulate it moving out of bounds
    // setTimeout(() => {
    //     jumpingElement.style.left = '250px' // Move the element out of the container
    // }, 1000) // Adjust the delay as needed

// })

// const fallingElement = document.getElementById('fallingElement') as HTMLDivElement
//  const container = document.getElementById('container') as HTMLDivElement

// document.addEventListener('DOMContentLoaded', () => {
    
// // Функция для обработки пересечения    
// const handleIntersection = (entries: any) => {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting) {
//             // если элемент не пересекается с контейнером, то падает
//                 fallingElement.style.top = '150px';
//             }
//         });
//     };

//     // Создаем Intersection Observer
//     const observer = new IntersectionObserver(handleIntersection, {
//         root: container,
//         threshold: 1.0 // Adjust the threshold as needed
//     });

//     // Observe the falling element
//     observer.observe(fallingElement);

//     // Optionally, move the element to simulate it moving out of bounds
//     setTimeout(() => {
//         fallingElement.style.left = '250px'; // Move the element out of the container
//     }, 1000); // Adjust the delay as needed
// });





