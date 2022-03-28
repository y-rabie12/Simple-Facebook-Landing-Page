'use strict';

const bars =  document.querySelector('.bars')

const bar =  document.querySelectorAll('.bar')

const images =  document.querySelector('.image-container')

const image =  document.querySelector('.main-image')



bars.addEventListener('click', function(e){
    let id = e.target.getAttribute('data-id')
    bar.forEach (curr =>  curr.classList.remove('active'));
    e.target.classList.add('active')
    image.src = `images/fb${id}.png`
})