const video = document.querySelector('#myVideo')
const copyrightYear = document.querySelector('.curr-year')

const date = new Date()
const currYear = date.getFullYear()

copyrightYear.innerText = currYear

video.addEventListener('ended', () => {
    video.classList.add('low-opacity')
})

video.addEventListener('play', () => {
    video.classList.remove('low-opacity')
})

const tl = gsap.timeline({duration: 0.3})

tl.from('.nav', {y: '-100%'})
tl.from('.main-content-wrapper', {x:'-100%'})
tl.from('.title', {x: '-100%'}, '<0')
tl.from('.footer',{y:'100%'})