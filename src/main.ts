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
    document.addEventListener('keydown', (e) => {
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
      } else if (e.code == 'ArrowLeft') {
        x -= 50
        jumpingElement.style.transform = (`scaleX(-1)`)
        jumpingElement.style.left = x + "px"

      } else if (e.code == 'Space') {
        e.preventDefault()
        // Добавляем класс для анимации прыжка 
        jumpingElement.classList.add('jump')
        // Удаляем класс после завершения анимации 
        setTimeout(() => { jumpingElement.classList.remove('jump') }, 500) // Длительность анимации в миллисекундах 
      }

      // Обработчик события клика на кнопку "Нет"
      noButton.addEventListener('click', () => {
        // modal.style.display = 'none' // Скрыть модальное окно
        // const newWindow = window.open("", "new window", "")
        // newWindow.document.write("<p>Hello, World!</p>")
      })
    })

  })
})


// const player = document.getElementById('player') as HTMLElement;
// const finish = document.getElementById('finish') as HTMLElement;
// const obstacle = document.getElementById('obstacle') as HTMLElement;

// let isJumping = false;
// let jumpHeight = 100; // высота прыжка
// let playerBottom = 0; // текущее положение игрока
// let obstacleInterval: NodeTS.Timeout;

// document.addEventListener('keydown', (event: KeyboardEvent) => {
//     if (event.code === 'ArrowRight') {
//         moveRight();
//     } else if (event.code === 'Space') {
//         jump();
//     }
// });

// // Функция для движения игрока вправо
// function moveRight() {
//     const right = parseInt(window.getComputedStyle(player).left);
//     player.style.left = (right + 10) + 'px';
//     checkCollision();
// }

// // Функция для прыжка
// function jump() {
//     if (isJumping) return;
//     isJumping = true;
//     playerBottom += jumpHeight;
//     player.style.bottom = playerBottom + 'px';

//     setTimeout(() => {
//         playerBottom -= jumpHeight;
//         player.style.bottom = playerBottom + 'px';
//         isJumping = false;
//         checkCollision();
//     }, 500); // время прыжка
// }

// // Функция для проверки коллизий
// function checkCollision() {
//     const playerRect = player.getBoundingClientRect();
//     const finishRect = finish.getBoundingClientRect();
//     const obstacleRect = obstacle.getBoundingClientRect();

//     // Проверка на столкновение с финишем
//     if (
//         playerRect.x < finishRect.x + finishRect.width &&
//         playerRect.x + playerRect.width > finishRect.x &&
//         playerRect.y < finishRect.y + finishRect.height &&
//         playerRect.y + playerRect.height > finishRect.y
//     ) {
//         alert('Вы добрались до финиша! Поздравляем!');
//         resetGame();
//     }

//     // Проверка на столкновение с препятствием
//     if (
//         playerRect.x < obstacleRect.x + obstacleRect.width &&
//         playerRect.x + playerRect.width > obstacleRect.x &&
//         playerRect.y < obstacleRect.y + obstacleRect.height &&
//         playerRect.y + playerRect.height > obstacleRect.y
//     ) {
//         alert('Игра окончена! Вы столкнулись с препятствием.');
//         resetGame();
//     }
// }

// // Функция для сброса игры
// function resetGame() {
//     player.style.left = '50px';
//     playerBottom = 0;
//     player.style.bottom = playerBottom + 'px';
//     resetObstacle();
// }

// // Функция для сброса препятствия
// function resetObstacle() {
//     obstacle.style.left = '200px'; // сброс позиции препятствия
//     clearInterval(obstacleInterval);
//     startObstacleMovement(); // Начинаем движение препятствия заново
// }

// // Функция для движения препятствия
// function startObstacleMovement() {
//     let position = 200;
//     obstacleInterval = setInterval(() => {
//         position -= 5; // скорость движения препятствия
//         if (position < -40) { // если препятствие выходит за пределы
//             position = 200;
//         }
//         obstacle.style.left = position + 'px';
//         checkCollision();
//     }, 30); // обновление позиции препятствия
// }

// // Запуск движения препятствия при старте игры
// startObstacleMovement();


