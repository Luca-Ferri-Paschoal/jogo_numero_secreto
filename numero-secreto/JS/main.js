import { Partida } from './Partida.js';

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const partida = new Partida(0, 1000);

document.querySelector('#botao-falar').addEventListener('click', event => partida.falar(event));
