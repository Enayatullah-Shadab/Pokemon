import { ProxyState } from "../AppState.js";

export default class Pokemon {
    constructor({ name, height, weight, img, type }) {
        this.name = data.name,
            this.height = data.height,
            this.weight = data.weight,
            this.img = img,
            this.type = type
        this.isApiPokemon = forms != undefined
    }

    get Template() {
        return `
        <div class="bg-light m-3 p-3 shadow">
    <div>
        <h4>Name:${this.name}</h4>
        <p>Height: ${this.height}</p>
        <p>Wieght: ${this.weight}</p>
        <p>img: ${this.img}</p>
        <p>type: ${this.type}</p>
    </div>
    <div class="text-right">
       ${this.Button}
    </div>
    `
    }
}