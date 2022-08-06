let side_nav_opener = document.querySelector('.btn-side-nav');
let overlay = document.querySelector('.overlay')
let modal_close_btn = document.querySelector('.close-modal-btn');
let modal = document.querySelector('.modal');
let modal_image = document.querySelector('.modal-img img')
let side_nav = document.querySelector('.side-nav');
let random_img_btn = document.querySelector('.random-img');
let header_images = document.querySelectorAll('.header-img');

side_nav_opener.addEventListener('click', ()=>{
    side_nav.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
})

overlay.addEventListener('click', ()=>{
    side_nav.classList.add('hidden');
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
})

modal_close_btn.addEventListener('click', ()=> {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
})

random_img_btn.addEventListener('click', ()=> {
    header_images.forEach((img)=>{
        setTimeout(()=>img.innerHTML = `<img src="https://picsum.photos/720/560/?random&t= ${new Date().getTime()}" alt="just-some-img">`, 1000);
    })
})

header_images.forEach((img => {
    img.addEventListener('click', (e)=>{
        console.log(e.target.getAttribute('src'))
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
        modal_image.setAttribute('src', `${e.target.getAttribute('src')}`);
    })
}))