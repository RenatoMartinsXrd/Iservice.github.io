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




 
