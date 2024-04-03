function tocaSom (seltorAudio) {
    const elemento = document.querySelector(seltorAudio); 

    if (elemento && elemento.localName === `audio`) {
      elemento.play();
    } else {
        console.log(`Elemento nao encontrado`);
    }
}

const listaDeTeclas = document.querySelectorAll(`.tecla`);

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        console.log(evento.code);

        if(evento.code == `Space` || evento.code == `Enter`){
            tecla.classList.add(`ativa`);
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove(`ativa`)
    }
} 
 