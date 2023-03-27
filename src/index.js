import './less/index.less'

// Your code goes here!

// let nav = document.querySelector('nav');

// let home = nav.firstElementChild;
// let about = home.nextElementSibling;
// let blog = about.nextElementSibling;
// let contact = blog.nextElementSibling;
// first click

window.addEventListener('load', event => {
    home.setAttribute("href", "https://www.dictionary.com/browse/home")
})


// mouseover

// nav.addEventListener("mouseover", event => {
//    event.target.style.color = 'red';
  
//    setTimeout(() => {
//     event.target.style.color = '';
//    }, 500)
// })

//keydown
const text1 = document.querySelector('#text-content')

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 65) {
        home.setAttribute("href", "https://www.dictionary.com/browse/a")
    }
  
})

//wheel

document.addEventListener("wheel", event => {
    document.body.style.color = 'purple';
  
   setTimeout(() => {
    document.body.style.color = '';
   }, 500)
})

//load
const title = document.querySelector("h1")

window.addEventListener("load", event => {
    title.textContent = 'Welcome!!!!'
  
   setTimeout(() => {
    title.textContent = 'Fun Bus'
   }, 1000)
})

//copy
window.addEventListener('copy', event => {
        title.textContent = 'What did you just copy punk'
    })

//resize
// onresize = function(){
// this.document.body.textContent = ''
// }

//click
// contact.addEventListener('click', event => {
//     event.target.style.color = 'white'
// })

//mousemove
document.body.addEventListener('mousemove', event => {
    const { clientX, clientY } = event
    // console.log(`mouse is at ${clientX}, ${clientY}`)
})

// dblclick
// contact.addEventListener('dblclick', event => {
//     event.target.style.backgroundColor = 'black'
// })

// mouseenter
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter',event => {
        destination.style.fontWeight = 'bold'
    })
}

// home.addEventListener('click', event => {
//     home.textContent = "You aren't going anywhere"
//     event.preventDefault()
// })
