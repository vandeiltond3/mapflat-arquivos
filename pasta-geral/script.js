

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

    let options = ''
    response.forEach(function(cidades){
    options += '<option>'+cidades.nome+'</option>'
    })
    cidade.innerHTML = options
})    

window.addEventListener('load', async ()=>{
    const request = await fetch(urlUF)
    const response = await request.json()

    const options = document.createElement('optgroup')
    options.setAttribute('label', 'UFs')
    response.forEach(function(uf){
        options.innerHTML += '<option>'+uf.sigla+'</option>'
    })

    uf.append(options)
})
