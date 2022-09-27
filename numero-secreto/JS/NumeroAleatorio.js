export class NumeroAleatorio {
    #min;
    #max;
    #numeroSorteado;

    constructor(min, max) {
        this.#min = min;
        this.#max = max;
        this.sorteiaNumero();
    }

    sorteiaNumero() {
        const aleatorio = this.#min + Math.random() * (this.#max + 1 - this.#min);

        this.#numeroSorteado = Math.floor(aleatorio);
        console.log(this.#numeroSorteado);
    }

    get numeroSorteado() {
        return this.#numeroSorteado;
    }

    isEquals(chute) {
        return chute === this.#numeroSorteado;
    }

    ehMaiorQueChute(chute) {
        return this.#numeroSorteado > chute;
    }
}
