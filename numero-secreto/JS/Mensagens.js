export class Mensagens {
    #mensagens;

    constructor(min, max, numeroSecreto) {
        this.#mensagens = [
            {
                text: `Parabéns, ${numeroSecreto} é o número secreto!`,
                icon: `<i class="fa-regular fa-face-party"></i>`,
            },

            {
                text: `O número secreto está entre ${min} e ${max}`,
                icon: `<i class="fa-regular fa-arrow-up-right-and-arrow-down-left-from-center"></i>`,
            },

            {
                text:  'Esse seu chute não é um número',
                icon: `<i class="fa-solid fa-ban"></i>`,
            },

            {
                text: 'O número secreto é maior',
                icon: `<i class="fa-solid fa-arrow-up-long"></i>`,
            },

            {
                text: 'O número secreto é menor',
                icon: `<i class="fa-solid fa-arrow-down-long"></i>`,
            },
        ]
    }

    get acertou() {
        return this.#mensagens[0];
    }

    get errouIntervalo() {
        return this.#mensagens[1];
    }

    get naoExiste() {
        return this.#mensagens[2];
    }

    get numeroMenor() {
        return this.#mensagens[3];
    }

    get numeroMaior() {
        return this.#mensagens[4];
    }
}
