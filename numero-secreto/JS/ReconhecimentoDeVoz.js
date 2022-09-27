export class ReconhecimentoDeVoz {
    #recognition;
    
    constructor() {
        this.#recognition = new SpeechRecognition();
        this.#recognition.lang = 'pt-Br';
    }

    run() {
        this.#recognition.start();

        return new Promise((resolve, reject) => {
            this.#recognition.addEventListener('result', event =>
                resolve(event.results[0][0].transcript)
            );
            
            this.#recognition.addEventListener('error', () =>
                reject('Não entendi o que você disse')
            );

            this.#recognition.addEventListener('end', () =>
                reject('Não entendi o que você disse')
            );
        });
    }
}