import axios from "axios";
import type {PokemonBasic, PokemonDetails} from "../types/pokemon";

export const fetchPokemonList = async (): Promise<PokemonDetails[]> => {
    // Traer la lista básica
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1200");
    const basicList: PokemonBasic[] = res.data.results;

    // Para cada uno, pedir detalles
    const detailPromises = basicList.map(async (p) => {
        const detailRes = await axios.get<PokemonDetails>(p.url);
        return detailRes.data;
    });

    return Promise.all(detailPromises);
};
