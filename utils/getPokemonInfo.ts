import { pokeAPIURL } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId:string) => {

    try {
        const data : Pokemon | undefined = await (await fetch(`${pokeAPIURL}/pokemon/${nameOrId}`)).json();

        return {
            id: data?.id,
            name: data?.name,
            sprites: data?.sprites
        }
    } catch (error) {
        return null
    }
    
}