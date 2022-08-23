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

function criarCarta(){
    const carta = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    carta.appendChild(front);
    carta.appendChild(back);
    grid.appendChild(carta);

    front.className = 'face front';
    back.className = 'face back';
    carta.className = 'carta';

}

criarCarta();
