import { Botao } from './Botao.js';
import { Mensagens } from './Mensagens.js';
import { NumeroAleatorio } from './NumeroAleatorio.js';
import { ReconhecimentoDeVoz } from './ReconhecimentoDeVoz.js';
import { View } from './View.js';

export class Partida {
    #numeroMaximo;
    #numeroMinimo;

    #audio;
    #reconhecimento;
    #view;
    #numeroAleatorio;
    #mensagens;
    #botaoReinicia;
    
    constructor(min, max) {
        this.#numeroMinimo = min;
        this.#numeroMaximo = max;
        
        this.#audio = new Audio('./audios/audioDeVitoria.mp3');
        this.#reconhecimento = new ReconhecimentoDeVoz();
        this.#view = new View();

        this.#numeroAleatorio = new NumeroAleatorio(
            this.#numeroMinimo, 
            this.#numeroMaximo,
        );

        this.#mensagens = new Mensagens(
            this.#numeroMinimo,
            this.#numeroMaximo,
            this.#numeroAleatorio.numeroSorteado,
        );

        this.#botaoReinicia = new Botao(
            document.querySelector('#botao-reinicia'),
            () => this.reinicia(),
        );

        this.#botaoReinicia.esconder();

        this.#view.atualizaIntervalo(
            this.#numeroMinimo, 
            this.#numeroMaximo,
        );
    }

    falar(event) {
        const botao = event.target;
        botao.setAttribute('disabled', true);
        
        this.#reconhecimento.run()
            .then(
                chute => this.#view.atualizaChute({
                    chute: chute,
                    mensagem: this.verificaChute(chute),
                })
            )
            .catch(
                () => this.#view.exibeErro()
            )
            .finally(
                () => botao.removeAttribute('disabled')
            )
        ;
    }

    verificaChute(chute) {
        chute = parseInt(chute);

        if (this.#numeroAleatorio.isEquals(chute)) {
            this.#audio.play();
            this.#botaoReinicia.aparecer();
            return this.#mensagens.acertou;
        }
        
        if (this.#chuteForaDoIntervalo(chute)) return this.#mensagens.errouIntervalo;

        if (this.#chuteNaoEhNumero(chute)) return this.#mensagens.naoExiste;

        if (this.#numeroAleatorio.ehMaiorQueChute(chute)) return this.#mensagens.numeroMenor;
        
        else return this.#mensagens.numeroMaior;
    }

    #chuteForaDoIntervalo(chute) {
        return chute > this.#numeroMaximo || chute < this.#numeroMinimo;
    }

    #chuteNaoEhNumero(chute) {
        return isNaN(chute);
    }

    reinicia() {
        window.location.reload();
    }
}
