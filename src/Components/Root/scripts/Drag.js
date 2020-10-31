import anime from 'animejs/lib/anime.es.js';


var speedX = 0
var lastLeftValue =0
var animation = anime({
  })
export  function drag (event,args) {
  var element = document.querySelector("#postContiner")
  if(element==null){
     
    return
  }
  
    window.addEventListener("mousemove",draging)
  }



var i = 1

  const draging = (e)=>{
 
    animation.pause()

    var element = document.querySelector("#postContiner")


    i = parseInt( element.style.left)
    i+=e.movementX;
    speedX = e.movementX;
    element.style.left = i+"px"
    lastLeftValue = parseInt( element.style.left)
    if(e.buttons===0){stopDrag()}

  }

  export function stopDrag (event) { 
      let deltaLeft = lastLeftValue+speedX
      console.warn( )
      var maxLeft = document.querySelector("#mainContiner").scrollWidth - document.querySelector("#mainContiner").clientWidth
      if(deltaLeft>0){deltaLeft=0}
      if(deltaLeft<maxLeft*-1){
          deltaLeft = maxLeft*-1
      }
    animation = anime({
        targets: "#postContiner",
        left:deltaLeft,
        easing: 'spring(1, 80, 10, 0)',
        autostart:false,})
    animation.play()

    window.removeEventListener('mousemove',draging)
   }

  