const copyrightYear = document.querySelector('.curr-year')

const date = new Date()
const currYear = date.getFullYear()

copyrightYear.innerText = currYear

const tl = gsap.timeline({duration: 0.3})

tl.from('.nav', {y: '-100%'})
tl.from('.main-content-wrapper', {x:'-100%'})
tl.from('.footer',{y:'100%'})