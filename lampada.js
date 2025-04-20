const turnOnOff = document.getElementById('turnOnOff');
const lampada = document.getElementById('lamp');

function lampOn() {
    if( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1;      /* O indexOf vai procurar a imagem e se ele encontrar ele vai me retornar um número maior do que -1, se ele não achar, ele retorna -1; Com isso, ela continua quebrada após clicar duas vezes. */
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);