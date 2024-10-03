// import './idbn.scss'

// type options = {
//     top?: number,
//     right?: number
//     html?: string
//     class?: string
// }
// function showNotification(options: options) {
//     if (!options.top) options.top = 10
//     if (!options.right) options.right = 10
//     if (!options.html) options.html = ''
//     if (!options.class) options.class = ''
//     let notification = document.createElement('div')
//     notification.innerHTML = options.html
//     notification.classList.add('notification')
//     if (options.class) {
//         notification.classList.add(options.class)
//     }
//     notification.style.top = window.innerHeight/2-150 + 'px' 
//     // чтобы поставить в центр
//     notification.style.top = options.top + 'px'
//     notification.style.right = options.right + 'px'
//     document.body.append(notification)
//     setTimeout(() => notification.remove(), 2000)
// }
// setInterval(() => {
//     showNotification({
//         top: 30,
//         right: 50,
//         html: '<img src="public/catcat.jpg">'
//     })
// }, 2200)