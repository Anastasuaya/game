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
    } 
    catGirl.style.left = catGirlX + "px"
    catGirl.style.top = catGirlY + "px"
})

document.addEventListener('keyup', (e) => {
    let jump = false

    if(e.key == 'Space') {
        jump = true
        $('#catGirl').animate({top: -100}, {duration: 300})
        $('#catGirl').animate({top: 0}, {duration: 300}, function(){
            jump = false
        })
    }
})


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