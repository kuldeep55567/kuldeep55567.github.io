// Swiper JS............
let swiper = new Swiper('.mySwiper',{
    slidesPerView: 1,
})
// Phone meno..........
document.querySelector('.Open').addEventListener('click',()=>{
    document.querySelector('.Close').style.display='block'
    document.querySelector('.Open').style.display='none'
    document.querySelector('nav ul').style.left='0'
})

document.querySelector('.Close').addEventListener('click',()=>{
    document.querySelector('.Close').style.display='none'
    document.querySelector('.Open').style.display='block'
    document.querySelector('nav ul').style.left='-9999px'
})

GitHubCalendar(".calendar", "kuldeep55567", { responsive: true });