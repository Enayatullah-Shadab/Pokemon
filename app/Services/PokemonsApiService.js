import { ProxyState } from "../AppState.js"
import pokemon from "../Models/Pokemon.js"
import { pokemonsApi } from "./AxiosService.js"


class PokemonsApiService {
    async getAllPokemon() {
        let res = await pokemonsApi.get("pokemon?limit=20")
        console.log(res.data.results)
        ProxyState.pokemon = res.data.results
        // ProxyState.pokemonsApi = res.data.results
    }

    // async getPokemon(id) {
    //     let res = await pokemonsApi.get(id)
    //     console.log(res.data)
    //     ProxyState.activePokemon = new Pokomon(res.data)
    // }
}

export const pokemonsApiService = new PokemonsApiService()