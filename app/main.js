import PokemonsApiController from "./Controllers/PokemonsApiController.js";

class App {
  pokemonsApiController = new PokemonsApiController();
}

window["app"] = new App();
