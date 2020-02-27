class NegociacaoController {

    constructor() {
            let $ = document.querySelector.bind(document);

            this._inputData = $('#data');
            this._inputQuantidade = $('#quantidade');
            this._inputValor = $('#valor');
            this._listaNegociacoes = new ListaNegociacoes();
        }
        // utilizando a função map e utilizado o spread operador indeicando que o array será desmenbrado
    adiciona(event) {

        event.preventDefault();

        let negociacao =
            new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value
            );

        this._listaNegociacoes.adiciona(negociacao);
        console.log(this._listaNegociacoes.negociacoes);
    }


}