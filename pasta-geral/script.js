tog = document.querySelector('.material-symbols-outlined')
menu = document.querySelector('.menu-addimvel')

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

function cliques(){

    document.body.style.overflow = show ? "hidden" : "initial"

    menu.classList.toggle('on', show)
    show = !show;

    if(tog.innerText == "menu"){
        tog.innerText = "close"
    }else{
        tog.innerText = "menu";
    }
}



//demais menus

togs = document.querySelector('.material-symbols-outlined')
menus = document.querySelector('.menu-adm')


let shows = true;

function clique(){

    document.body.style.overflow = shows ? "hidden" : "initial"

    menus.classList.toggle('on', shows)
    shows = !shows;

    if(togs.innerText == "menu"){
        togs.innerText = "close"
    }else{
        togs.innerText = "menu";
    }
}