

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