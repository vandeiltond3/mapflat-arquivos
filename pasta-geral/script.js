

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
};


// estados e cidades


const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
const cidade = document.querySelector('#cidade')
const uf = document.querySelector('#uf')

uf.addEventListener('change', async function(){
    const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf.value+'/municipios'
    const request = await fetch(urlCidades)
    const response = await request.json()

    let optionsi = ''

    response.forEach(function(cidades){
    optionsi += '<option>'+cidades.nome+'</option>'
    })
    cidade.innerHTML = optionsi
})    

window.addEventListener('load', async ()=>{
    const request = await fetch(urlUF)
    const response = await request.json()

    const optionsi = document.createElement('optgroup')
    optionsi.setAttribute('label', 'UFs')
    response.forEach(function(uf){
        optionsi.innerHTML += '<option>'+uf.sigla+'</option>'
    })

    uf.append(optionsi)
})


// select de categoria

const tipo = document.querySelector('#tipo')


function selecionou(){
    const select = document.querySelector('#categoria')
    const valor = select.options[select.selectedIndex].value
    
    if(valor === 'comercial'){
        tipo.disabled = true
}else{
    tipo.style.display = 'block'
}

}
selecionou()
