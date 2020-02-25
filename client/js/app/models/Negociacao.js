class Negociacao {

    constructor() {
            this._data = new Date();;
            this._quantidade = 1;
            this._valor = 0.0;
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