let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(()=>{
    nextImagem();
}, 3000)

function nextImagem(){
    contador++;
    if(contador>4){
        contador = 1;
    }

    document.getElementById("radio"+contador).checked = true;
}

let menu = window.document.querySelector('#menuu')
let menuu = window.document.querySelector('#div-menu')


menu.addEventListener('click', entrar)
function entrar(){
    menuu.style.display = 'block'
}

menuu.addEventListener('click', sair)
function sair(){
    menuu.style.display = 'none';
}