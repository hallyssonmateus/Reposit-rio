const myObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.anima')

elements.forEach((element)=>{
    myObserver.observe(element)
})

// Modo Dark

let toogle = document.getElementById('toogle')
let body = document.querySelector('body')

toogle.addEventListener('click', ()=>{
    toogle.classList.toggle('dark-mode')
    body.classList.toggle('dark-mode')
})