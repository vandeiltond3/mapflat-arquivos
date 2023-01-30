tog = document.querySelector('.material-symbols-outlined')
menu = document.querySelector('.menu-imove')

/*function clique(){
    if(menu.style.display == "block"){
        menu.style.display = "none"
        tog.innerText = "menu"
    }else{
        menu.style.display = "block"
        tog.innerText = "close"
    }
}*/

let show = true;

function clique(){

    document.body.style.overflow = show ? "hidden" : "initial"

    menu.classList.toggle('on', show)
    show = !show;

    if(tog.innerText == "menu"){
        tog.innerText = "close"
    }else{
        tog.innerText = "menu";
    }
}