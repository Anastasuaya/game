import './style.css'

// Получаем элементы модального окна и кнопок
    const modal = document.getElementById('modal') as HTMLDivElement
    const yesButton = document.getElementById('yesbutton') as HTMLButtonElement
    const noButton = document.getElementById('nobutton') as HTMLButtonElement

    const objgame = document.getElementById('objgame') as HTMLDivElement

            // Получаем элемент, который будет прыгать 
const jumpingElement = document.getElementById('jumpingElement') as HTMLDivElement

document.addEventListener('DOMContentLoaded', () => {

    // Показать модальное окно на загрузке страницы, скрыть объекты
    modal.style.display = 'flex'
    objgame.style.display = 'none'

    // Обработчик события клика на кнопку "Да"
    yesButton.addEventListener('click', () => {
        modal.style.display = 'none' // Скрыть модальное окно
        objgame.style.display = 'block' // показать объекты

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


         // Начать падение объекта
        //  let falling = true;

        //  const fall = () => {
        //      let jumpingCoords = jumpingElement.getBoundingClientRect();
        //      const containerRect = document.getElementById('container')!.getBoundingClientRect();
 
             // Проверка, достиг ли объект дна контейнера
        //      if (jumpingCoords.bottom < containerRect.bottom) {
        //          jumpingElement.style.bottom = (parseInt(jumpingElement.style.bottom || '0') + 5) + 'px';
        //          requestAnimationFrame(fall);
        //      } else {
        //          falling = false;
        //      }
        //  };
         
        //  fall(); // Запускаем функцию падения
    })

    // Обработчик события клика на кнопку "Нет"
    noButton.addEventListener('click', () => {
        // modal.style.display = 'none'
        const newWindow = window.open("", "new window", "")
        newWindow?.document.write("<h2>Лучше иди и поиграй</h2>")
    })
})

// const fallingObject = document.getElementById('fallingObject') as HTMLElement;
// const container = document.getElementById('container') as HTMLElement;

// let falling = true;
// let velocity = 1; // скорость падения в пикселях
// let position = 0;

// Функция обновления положения объекта
// function update() {
//     if (falling) {
//         position += velocity;
//         jumpingElement.style.top = position + 'px';

        // Параметры контейнера
//         const containerRect = objgame.getBoundingClientRect();
//         const objectRect = jumpingElement.getBoundingClientRect();

        // Проверка выхода за границы
//         if (objectRect.bottom >= containerRect.bottom) {
//             falling = false; // Прекращаем падение
//         }

//         requestAnimationFrame(update); // Настройка следующего обновления
//     }
// }

// Начинаем обновление
// requestAnimationFrame(update);


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




