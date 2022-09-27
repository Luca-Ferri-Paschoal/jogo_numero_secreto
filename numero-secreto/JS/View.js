export class View {
    #spanMaiorValor;
    #spanMenorValor;
    #divChute;

    constructor() {
        this.#spanMenorValor = document.querySelector('#menor-valor');
        this.#spanMaiorValor = document.querySelector('#maior-valor');
        this.#divChute = document.querySelector('#chute');
    }

    atualizaIntervalo(min, max) {
        this.#spanMenorValor.textContent = min;
        this.#spanMaiorValor.textContent = max;
    }

    atualizaChute(object) {
        const { chute, mensagem } = object;

        this.#divChute.innerHTML =  `
            <p>Você disse: <br> <span class="box">${chute}</span></p>
            <p>${mensagem.text} ${mensagem.icon}</p>
        `;
    }

    exibeErro() {
        this.#divChute.innerHTML = 'Não consegui entender o que você falou.';
    }

    reinicia() {
        this.#divChute.innerHTML = '';
    }
}
