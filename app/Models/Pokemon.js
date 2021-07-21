import { ProxyState } from "../AppState.js";

export default class Pokemon {
    constructor(data) {
        this.name = data.name,
            this.height = data.height,
            this.weight = data.weight
    }

    get Template() {
        return `
    
    `
    }

}