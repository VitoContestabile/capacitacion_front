import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../services/pokemonApi";
import type { PokemonDetails } from "../types/pokemon";

export const usePokemonList = () => {
    return useQuery<PokemonDetails[]>({
        queryKey: ["pokemonList"],
        queryFn: fetchPokemonList,
    });
};