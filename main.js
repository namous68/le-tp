window.addEventListener("keypress", playSound);



function removeTransition(event) {
    if (event.keypress !== 'transform') return; 
    event.classList.remove('playing');

  }



function playSound(event) {

    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    
    
    

    // Touche A
    if (event.keyCode === 65) {
        let son1 = document.getElementById('son1');
        son1.play();
        key.classList.add('playing');
        key.addEventListener('transitionend', removeTransition);
        
    } else
    // Touche Z
        if (event.keyCode === 90) {
            let son1 = document.getElementById('son2');
            son1.play();
            key.classList.add('playing');
        key.addEventListener('transitionend', removeTransition);

        }else
     // Touche E
        if (event.keyCode === 65) {
            let son1 = document.getElementById('son3');
            son1.play();
            key.classList.add('playing');
        key.addEventListener('transitionend', removeTransition);
        }else
        // Touche Q
        if (event.keyCode === 81) {
            let son1 = document.getElementById('son4');
            son1.play();
            key.classList.add('playing');
        key.addEventListener('transitionend', removeTransition);
        }else
        // Touche S
        if (event.keyCode === 83) {
            let son1 = document.getElementById('son5');
            son1.play();
            key.classList.add('playing');
        key.addEventListener('transitionend', removeTransition);
        }else
        // Touche D
        if (event.keyCode === 68) {
            let son1 = document.getElementById('son6');
            son1.play();  
            key.classList.add('playing');
        key.addEventListener('transitionend', removeTransition);
        }else
        // Touche W
        if (event.keyCode === 87) {
            let son1 = document.getElementById('son7');
            son1.play(); 
            key.classList.add('playing');
        key.addEventListener('transitionend', removeTransition); 
        }else
        // Touche X
        if (event.keyCode === 88) {
            let son1 = document.getElementById('son8');
            son1.play(); 
            key.classList.add('playing');
        key.addEventListener('transitionend', removeTransition);    
        }else
        // Touche C
        if (event.keyCode === 67) {
            let son1 = document.getElementById('son9');
            son1.play(); 
            key.classList.add('playing');
        key.addEventListener('transitionend', removeTransition);
        }  
       
  }

  function removeTransition(event) {
    event.target.classList.remove("playing");
  }

    let keyA;
    keyA = document.querySelector('div[data-key="65"]');

    let keyZ;
    keyZ = document.querySelector('div[data-key="90"]');

    let keyE;
    keyE = document.querySelector('div[data-key="65"]');

    let keyQ;
    keyQ = document.querySelector('div[data-key="81"]');

    let keyS;
    keyS = document.querySelector('div[data-key="83"]');

    let keyD;
    keyD = document.querySelector('div[data-key="68"]');

    let keyW;
    keyW = document.querySelector('div[data-key="87"]');

    let keyX;
    keyX = document.querySelector('div[data-key="88"]');

    let keyC;
    keyC = document.querySelector('div[data-key="67"]');




    const button = document.getElementById('btn');
    button.textContent = 'Play Beat';
    button.addEventListener('click', () => {
        
      simulateKey(); // je ne comprend pas
      playBeat().then(() => {
        console.log('Beat complete');
      });
    });


    function playBeat() {
        return new Promise((resolve) => {
         
            setTimeout(() => {
                playNextBeat(index + 1); 
              }, beatDelays[index]);
            
        
            playNextBeat(0); 
            
        });
      }

      function playBeat() {
        return new Promise((resolve) => {
          
          const beatDelays = [500, 1000, 1500, 2000];
      
          // Fonction  pour jouer chaque beat
          function playNextBeat(index) {
            if (index >= beatDelays.length) {
              resolve(); 
              return;
            }
        }
    });
}

      setTimeout(() => {
        playNextBeat(index + 1); 
      }, beatDelays[index]);
    

    playNextBeat(0); 
  
    





