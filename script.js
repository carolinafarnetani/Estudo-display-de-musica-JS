let musicas = [
    {titulo:'Allégro', artista:'Emmit Fenn', src:'musicas/Allégro - Emmit Fenn.mp3', img:'imagens/01.jpg'},
    
    {titulo:'American Idle', artista:'RKVC', src:'musicas/American Idle - RKVC.mp3', img:'imagens/02.jpg'},
    
    {titulo:'Anomalous Hedges', artista:'Mini Vandals', src:'musicas/Anomalous Hedges - Mini Vandals.mp3', img:'imagens/03.jpg'},




    {titulo:'Before I Go', artista:'RKVC', src:'musicas/Before I Go - RKVC.mp3', img:'imagens/04.jpg'},
    
    {titulo:'Bourree', artista:'Joel Cummins', src:'musicas/Bourree - Joel Cummins.mp3', img:'imagens/05.jpg'},
    
    {titulo:'Carnival De Brazil', artista:'Doug Maxwell', src:'musicas/Carnival De Brazil - Doug Maxwell.mp3', img:'imagens/06.jpg'},





    {titulo:'Crops', artista:'Delicate Steve', src:'musicas/Crops - Delicate Steve.mp3', img:'imagens/01.jpg'},
    
    {titulo:'Ella Vater', artista:'The Mini Vandals', src:'musicas/Ella Vater - The Mini Vandals.mp3', img:'imagens/02.jpg'},
    
    {titulo:'Erev Shel Shoshanim', artista:'Es Jammy Jams', src:'musicas/Erev Shel Shoshanim - Es Jammy Jams.mp3', img:'imagens/03.jpg'},




    {titulo:'First Dream', artista:'Brian Bolger', src:'musicas/First Dream - Brian Bolger.mp3', img:'imagens/04.jpg'},
    
    {titulo:'Fortunate Son', artista:'Silent Partner', src:'musicas/Fortunate Son - Silent Partner.mp3', img:'imagens/05.jpg'},
    
    {titulo:'Fractal of Light', artista:'Chris Haugen', src:'musicas/Fractal of Light - Chris Haugen.mp3', img:'imagens/06.jpg'},





    {titulo:'Frailach 1', artista:'Es Jammy Jams', src:'musicas/Frailach 1 - Es Jammy Jams.mp3', img:'imagens/01.jpg'},
    
    {titulo:'Frailach 2', artista:'Es Jammy Jams', src:'musicas/Frailach 2 - Es Jammy Jams.mp3', img:'imagens/02.jpg'},
    
    {titulo:'Freedom', artista:'Dan Lebowitz', src:'musicas/Freedom_ - Dan Lebowitz.mp3', img:'imagens/03.jpg'},





    {titulo:'Future King of Heaven', artista:'Zachariah Hickman', src:'musicas/Future King of Heaven - Zachariah Hickman.mp3', img:'imagens/04.jpg'},
    
    {titulo:'Getz Me to Brazil', artista:'Doug Maxwell_Media Right Productions', src:'musicas/Getz Me to Brazil - Doug Maxwell_Media Right Productions.mp3', img:'imagens/05.jpg'},
    
    {titulo:'Hit the Switch', artista:'Silent Partner', src:'musicas/Hit the Switch - Silent Partner.mp3', img:'imagens/06.jpg'},




    {titulo:'In Memory of Jean Talon', artista:'Mini Vandals', src:'musicas/In Memory of Jean Talon - Mini Vandals.mp3', img:'imagens/01.jpg'},
    
    {titulo:'Leaning On the Everlasting Arms', artista:'Zachariah Hickman', src:'musicas/Leaning On the Everlasting Arms - Zachariah Hickman.mp3', img:'imagens/02.jpg'},
    
    {titulo:'No.2 Remembering Her', artista:'Esther Abrami', src:'musicas/No.2 Remembering Her - Esther Abrami.mp3', img:'imagens/03.jpg'},




    {titulo:'No.6 In My Dreams', artista:'Esther Abrami', src:'musicas/No.6 In My Dreams - Esther Abrami.mp3', img:'imagens/04.jpg'},
    
    {titulo:'Od Yishama', artista:'Es Jammy Jams', src:'musicas/Od Yishama - Es Jammy Jams.mp3', img:'imagens/05.jpg'},
    
    {titulo:'Orient', artista:'SefChol', src:'musicas/Orient - SefChol.mp3', img:'imagens/06.jpg'},



    {titulo:'Trimmed & Taught', artista:'Dan Lebowitz', src:'musicas/Trimmed & Taught - Dan Lebowitz.mp3', img:'imagens/01.jpg'},
    
    {titulo:'Yismach Chatoni', artista:'Es Jammy Jams', src:'musicas/Yismach Chatoni - Es Jammy Jams.mp3', img:'imagens/02.jpg'},
    
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 25;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 25){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

