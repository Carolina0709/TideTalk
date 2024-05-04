function playSonido(idAudio) {
    document.querySelector(idAudio).play();
}
  

const keys = document.querySelectorAll('.key');
  

for(let i = 0; i < keys.length; i++){

    const key = keys[i];
    const buttonClass = key.classList[1];
    const idAudio = `#sound_${buttonClass}`;
          
    key.onclick = function () {
        playSonido(idAudio);
    };
    key.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            key.classList.add('activa');
        }
    }
    key.onkeyup = function(){
        key.classList.remove('activa');
    }
       
  }
