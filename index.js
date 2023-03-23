const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// ............navbar..........
document.querySelector('.nav-button .Open').addEventListener('click',()=>{
    document.querySelector('nav .nav-container ul').style.left = '0';
    document.querySelector('.nav-button .Close').style.display='block'
    document.querySelector('.nav-button .Open').style.display='none'
});
document.querySelector('.nav-button .Close').addEventListener('click',()=>{
    document.querySelector('.nav-button .Close').style.display='none'
    document.querySelector('nav .nav-container ul').style.left = '-16rem';
    document.querySelector('.nav-button .Open').style.display='block'
})
// .........nav-active.............
const active = document.querySelectorAll('.nav-container ul li a');
active.forEach(index => {
    index.addEventListener('click',()=>{
        removeItem();
        index.classList.add('nav-active')
    })    
});
function removeItem(){
    active.forEach(index => {      
        index.classList.remove('nav-active'); 
    });    
}
// ...........skills section................
const skilltitle = document.querySelectorAll('.skill');
skilltitle.forEach(itemm => {
    let iitem = itemm.querySelector('.skill-items')
    itemm.addEventListener('click',()=>{
        iitem.classList.toggle('show-item');
    })    
});
// /..................... Window Scroll.................
window.addEventListener('scroll',()=>{
   document.querySelector('nav').classList.toggle('nav-sroll', window.scrollY > 0);
})