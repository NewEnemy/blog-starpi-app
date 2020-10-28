
import anime from 'animejs/lib/anime.es.js';

var IsScrolling 
var initialY = null
const calback =(e)=>{
    if(initialY == null){
       initialY =  window.scrollY
    }
    clearTimeout(IsScrolling)
    IsScrolling = setTimeout(stopedScrolling,40,false)

   

}

const stopedScrolling = ()=>{
    var procent = 0
    var rootElement = document.querySelector("#root")
    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    procent= (window.scrollY*98)/(limit-window.innerHeight)
                anime({
        targets: "#ball",
        left: procent+"%",
        duration: 1000,
       
        easing: 'spring(1, 80, 10, 0)',})

  initialY =null
}
export const ballInit=()=>{
    document.addEventListener('scroll',calback)

    console.error("IM ALIVE")
}