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