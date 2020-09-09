function perfil(){
    this.perfilSelecionado = 0;
}

perfil.prototype.identificarPerfil = function(){
    let botoes = document.querySelectorAll(".botoes a");
    botoes.forEach((item)=>{
    item.addEventListener("click",(evt)=>{
        this.perfilSelecionado = evt.target.id
        sessionStorage.setItem("perfil-logado",this.perfilSelecionado)
    })
})
}

function buttonGo(button,local){
    button.style.cursor = "pointer";
    button.addEventListener("click",()=>{
        document.location.replace(local);
    })
    button.addEventListener("drag",()=>{
        document.location.replace(local);
    })

}

function showMenuHamburguer(button,show){
    button.addEventListener("click",()=>{
        show.classList.toggle("menu-open");
        button.classList.toggle("active");
    })

    button.addEventListener("drag",()=>{
        show.classList.toggle("menu-open");
        button.classList.toggle("active");
    })
}

var transform_porcentagem = 0;
var tela_deslizante = 0;


function navigationTabbedPC(body,itens_navigation,icon_scroll){
    let metade = parseInt(window.innerWidth/2);
    let tam_navigation = itens_navigation.length;
    body.addEventListener("click",(evt)=>{
     
        console.log(evt.x)
        if(evt.x>metade){
            console.log("direita")
            tela_deslizante+=1
            if(tela_deslizante<tam_navigation){
                transform_porcentagem+=100;
                for(let i = 0;i<tam_navigation;i++){
                    // itens_navigation[i].style.transform = "translateX(-100%)"; 
                    itens_navigation[i].style.transform = "translateX(" +"-" + transform_porcentagem.toString() +"%"+")";  
                    
                }
                icon_scroll.style.transform = "translateX(" + transform_porcentagem.toString() +"%"+")";  
            }else{
                tela_deslizante-=1
            }
            
        }else if(evt.x<metade){
            console.log("esquerda")
            tela_deslizante-=1
            if(tela_deslizante>=0 && tela_deslizante<tam_navigation){
                transform_porcentagem-=100;
                for(let i = 0;i<tam_navigation;i++){
                    // itens_navigation[i].style.transform = "translateX(-100%)"; 
                    itens_navigation[i].style.transform = "translateX(" +"-" + transform_porcentagem.toString() +"%"+")";     
                }
                icon_scroll.style.transform =  "translateX(" + transform_porcentagem.toString() +"%"+")";     
            }else{
                tela_deslizante = 0
            }
        }
  
    })
}

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
 return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
   const firstTouch = getTouches(evt)[0];                                      
   xDown = firstTouch.clientX;                                      
   yDown = firstTouch.clientY;                                      
}                                               


function navigationTabbedMobile(evt,itens_navigation,icon_scroll){
    
    if ( ! xDown || ! yDown ) {
       return;
    }
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    var tam_navigation = itens_navigation.length;



    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            tela_deslizante+=1
            if(tela_deslizante<tam_navigation){
                transform_porcentagem+=100;
                for(let i = 0;i<tam_navigation;i++){
                    // itens_navigation[i].style.transform = "translateX(-100%)"; 
                    itens_navigation[i].style.transform = "translateX(" +"-" + transform_porcentagem.toString() +"%"+")";  
                    
                }
                icon_scroll.style.transform = "translateX(" + transform_porcentagem.toString() +"%"+")";  
            }else{
                tela_deslizante-=1
            }
        } else {
            /* right swipe */
            tela_deslizante-=1
            if(tela_deslizante>=0 && tela_deslizante<tam_navigation){
                transform_porcentagem-=100;
                for(let i = 0;i<tam_navigation;i++){
                    // itens_navigation[i].style.transform = "translateX(-100%)"; 
                    itens_navigation[i].style.transform = "translateX(" +"-" + transform_porcentagem.toString() +"%"+")";     
                }
                icon_scroll.style.transform =  "translateX(" + transform_porcentagem.toString() +"%"+")";     
            }else{
                tela_deslizante = 0
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;    
    
 };
 






 
