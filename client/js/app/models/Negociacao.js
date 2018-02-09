class Negociacao{

    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;       
        this._valor = valor;

        /* congela o objeto, para que não possa ser alterado "por fora" */
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get valor(){
        return this._valor;
    }

    get quantidade(){
        return this._quantidade;
    }

    get data(){
        return new Date(this._data.getTime());
    }
}