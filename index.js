const grid = document.getElementById('grid');
times = ['atleti',
'barcelona',
'bayer',
'chelsea',
'city',
'leicester',
'liverpool',
'real',
'tottenham',
'united']

let primeiroTime = '';
let segundoTime ='';
let carta1 = '';
let carta2 = '';

function criarCarta(time){
    const carta = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    carta.appendChild(front);
    carta.appendChild(back);
    grid.appendChild(carta);

    front.className = 'face front';
    back.className = 'face back';
    carta.className = 'carta';

    carta.addEventListener('click', virarCarta);

    carta.setAttribute('data-time', time);
    
    front.style.backgroundImage=`url(img/${time}.png)`;

}

function gerarJogo(){
    let duplicarCartas = [...times, ...times];
    let embaralhar = duplicarCartas.sort(() => Math.random() - 0.5);

    embaralhar.map((time)=>{
        const carta = criarCarta(time);      
    });
}
gerarJogo();


function virarCarta({target}){    
    if(target.parentNode.className.includes('virar')){
        return;
    } else{
        if(primeiroTime === ''){
            carta1 = target.parentNode;
            target.parentNode.className = 'carta virar';
            primeiroTime = target.parentNode.getAttribute('data-time');
        }  else if(segundoTime === ''){
            carta2 = target.parentNode;
            target.parentNode.className = 'carta virar';
            segundoTime = target.parentNode.getAttribute('data-time');
        } else{
            return;
        }
    }
    pontuacao();
}

function pontuacao(){
    if(primeiroTime === segundoTime){
        carta1.firstChild.classList.add('acertada');
        carta2.firstChild.classList.add('acertada');
        console.log('acertou');
        primeiroTime = '';
        segundoTime = '';
        carta1 = '';
        carta2 = '';
    } else if((primeiroTime !== segundoTime)&&(segundoTime !== '')){
        setTimeout(()=>{
            carta1.classList.remove('virar');
            carta2.classList.remove('virar');
            primeiroTime = '';
            segundoTime = '';
            carta1 = '';
            carta2 = '';
        }, 600);    
        }
}