import { useQuery } from "@tanstack/react-query";
import { fetchPokemonByName, fetchPokemonSpecies, fetchEvolutionChain } from "../services/evolutionApi";

export const usePokemonDetails = (pokemonName: string) => {
    return useQuery({
        queryKey: ["pokemonDetails", pokemonName],
        queryFn: () => fetchPokemonByName(pokemonName),
        enabled: !!pokemonName,
    });
};

export const usePokemonEvolutions = (pokemonId: number) => {
    return useQuery({
        queryKey: ["pokemonEvolutions", pokemonId],
        queryFn: async () => {
            const species = await fetchPokemonSpecies(pokemonId);
            const evolutionChain = await fetchEvolutionChain(species.evolution_chain.url);
            return evolutionChain;
        },
        enabled: !!pokemonId,
    });
};