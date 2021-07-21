import { ProxyState } from "../AppState.js";
import { pokemonsApiService } from "../Services/PokemonsApiService.js";


export default class PokemonsApiController {
    constructor() {
        console.log("pokemon api controller working")
        // ProxyState.on('pokemonsApi', _drawPokemon)
        this.getAllPokemon()
    }

    async getAllPokemon() {
        try {
            await pokemonsApiService.getAllPokemon();
        } catch (error) {
            console.error('There was an Issue getting pokemonApi')
        }
    }
}