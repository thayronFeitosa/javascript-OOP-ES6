class Negociacao {

    constructor(data, quantidade, valor) {
            this._data = data;
            this._quantidade = quantidade;
            this._valor = valor;
        }
        //retorna o volume quantidade * valor 
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }

    get quantidade() {
        return this._quantidade;
    }

    set quantidade(quantidade) {
        this._quantidade = quantidade;
    }

    get valor() {
        return this._valor;
    }

    set valor(valor) {
        this._valor = valor;
    }



}