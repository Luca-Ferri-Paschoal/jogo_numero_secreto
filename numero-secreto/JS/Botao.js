export class Botao {
    #botao;

    constructor(element, acao) {
        this.#botao = element;

        this.#botao.addEventListener('click', acao);
    }

    esconder() {
        this.#botao.classList.add('escondido');
    }
    
    aparecer() {
        this.#botao.classList.remove('escondido');
    }
}
