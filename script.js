//Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener ('click',() =>{
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
//End Of Navbar

//Section 2 video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const plauPause = () => {
    if(video.paused){
       video.play()
       btn.className = 'far fa-pause-circle'
       video.style.opacity = '.7'
    }else{
        video.pause()
       btn.className = 'far fa-play-circle'
       video.style.opacity = '.3'
    }
    
}
btn.addEventListener('click',() =>{
    plauPause()
})

video.addEventListener('timeupdate',() => {
    const barWidth = video.currentTime/video.duration
    bar.style.width = '${barWidth * 100}%'
    if(video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
})

//End Of Section 2video

//Section 3 pricing card
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
//End Of Section 3 pricing card