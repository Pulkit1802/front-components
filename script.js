let side_nav_opener = document.querySelector('.btn-side-nav');
let overlay = document.querySelector('.overlay')

side_nav_opener.addEventListener('click', ()=>{
    document.querySelector('.side-nav').classList.toggle('hidden');
    overlay.classList.toggle('hidden')
})

overlay.addEventListener('click', ()=>{
    document.querySelector('.side-nav').classList.add('hidden');
    overlay.classList.add('hidden');
})