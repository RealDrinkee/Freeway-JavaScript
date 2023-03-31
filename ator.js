let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor() {
    if(keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        if(podeSeMover()){
            yAtor += 3;
        }
    }
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], carroComprimento, carroAltura, xAtor, yAtor, 15)
        if(colisao){
            voltaAtorPAraPosilcaoInicial();
            somDaColisa.play();
            if(pontosMaiorQueZero()){
                meusPontos -= 1;
            }
        }
    }
}

function voltaAtorPAraPosilcaoInicial(){
    yAtor = 366;
}

function incluipontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255,240,60));
    text(meusPontos, width / 5, 27);
}

function marcaPonto(){
    if(yAtor < 15){
        meusPontos += 1;
        somDoPonto.play();
        voltaAtorPAraPosilcaoInicial();
    }
}

function pontosMaiorQueZero() {
    return meusPontos > 0;
}

function podeSeMover(){
    return yAtor < 366;
}
