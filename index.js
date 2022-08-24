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

let primeiraCarta = '';
let segundaCarta ='';

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
    if(primeiraCarta === ''){
        target.parentNode.className = 'carta virar';
        primeiraCarta = target.parentNode;
    }  else if(segundaCarta === ''){
        target.parentNode.className = 'carta virar';
        segundaCarta = target.parentNode;
    } else{
        return;
    }
}
