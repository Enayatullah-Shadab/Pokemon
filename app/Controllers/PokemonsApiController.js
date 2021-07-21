import { ProxyState } from "../AppState.js";
import { pokemonsApiService } from "../Services/PokemonsApiService.js";


function _drawAll() {
    const pokemon = ProxyState.pokemon
    let template = ''
    pokemon.forEach(p => template += `<li class="action" onclick="app.pokemonApiController.getPokemon('')">${p.name}</li>`)
    document.getElementById('api-pokemon').innerHTML = template
}

export default class PokemonsApiController {
    constructor() {
        console.log("pokemon api controller working")
        ProxyState.on('pokemon', _drawAll)
        this.getAllPokemon()
    }

    async getAllPokemon() {
        try {
            await pokemonsApiService.getAllPokemon();
        } catch (error) {
            console.error(error)
        }
    }
}