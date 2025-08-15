import axios from "axios";
import type { EvolutionChain, Species, PokemonDetails } from "../types/pokemon";

export const fetchPokemonSpecies = async (pokemonId: number): Promise<Species> => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    return response.data;
};

export const fetchEvolutionChain = async (evolutionUrl: string): Promise<EvolutionChain> => {
    const response = await axios.get(evolutionUrl);
    return response.data;
};

export const fetchPokemonByName = async (name: string): Promise<PokemonDetails> => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.data;
};