const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const navClose = document.querySelector('.nav_close')

burger.addEventListener('click', ()=>{
    nav.classList.add('nav_active')
})

navClose.addEventListener('click',()=>{
    nav.classList.remove('nav_active')
})

try{
    const mute = document.querySelector('.mute_checkbox')
    const audio = new Audio('./audio/watertower.mp3')

    const checkMute =() =>{
        if (mute.checked){
        audio.play().catch(()=>{
            mute.checked=false
        })
        } else {
        audio.pause()
        }
}
    if(mute) {
    setTimeout(checkMute,2000)
    }
    mute.addEventListener('change', checkMute)
} catch{

}

try{
    const sliderThumbs = new Swiper('.slider-thumbs', {
        loop:true,
        spaceBetween:20,
        slidesPerView:3,
        centeredSlides:true,
        loopedSlides:4,
})

    sliderThumbs.on('click',(swiper)=>{
    swiper.slideTo(swiper.clickedIndex)
})

    const sliderMain = new Swiper('.slider-main',{
        loop:true,
        spaceBetween:10,
        loopedSlides:4, 
})

    sliderThumbs.controller.control = sliderMain;
    sliderMain.controller.control = sliderThumbs;

    const video = document.querySelectorAll('video')
    sliderMain.on('slideChange', ()=>{
        for(let i=0; i<video.length;i+=1)
        video[i].pause()
    })

    const pagination = document.querySelector('.pagination')
    const paginationButton = document.querySelector('.pagination_arrow')

    paginationButton.addEventListener('click', ()=>{
        pagination.classList.toggle('pagination_active')
    })
}
catch{

}