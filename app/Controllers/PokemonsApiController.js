import { ProxyState } from "../AppState.js";
import { pokemonsApiService } from "../Services/PokemonsApiService.js";


function _drawAll() {
    const spells = ProxyState.allPokemonsApi
    let template = ''
    pokemons.forEach(s => template += `<li class="action" onclick="app.dndApiSpellsController.getPokemon('')">${p.name}</li>`)
    document.getElementById('api-pokemon').innerHTML = template
}

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