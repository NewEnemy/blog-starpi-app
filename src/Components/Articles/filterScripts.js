
import anime from 'animejs/lib/anime.es.js';


export function ShowHide(){
const continer = document.querySelector("#filterOptions")
const filterOptionsBar = document.querySelector("#optionBar")
var expanded =   filterOptionsBar.dataset.show
   if(expanded=='true'){
    anime({
        targets:filterOptionsBar,
        left:-300,
        scaleX:3
    })
    continer.style.overflow = "hidden"
    
    filterOptionsBar.setAttribute('data-show',"false")
   }else{
   
 
    anime({
        targets:filterOptionsBar,
        left:0,
        scaleX:1
     
    })
    filterOptionsBar.setAttribute('data-show',"true")
   }
}
