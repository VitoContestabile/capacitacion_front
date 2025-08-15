import { usePokemonEvolutions } from "../hooks/usePokemonDetails";
import type { EvolutionDetail } from "../types/pokemon";
import { EvoCard } from "../styles/components";

interface PokemonEvolutionsProps {
    pokemonId: number;
}

export const PokemonEvolutions = ({ pokemonId }: PokemonEvolutionsProps) => {
    const { data: evolutionChain, isLoading, error } = usePokemonEvolutions(pokemonId);

    if (isLoading) return <p>Cargando evoluciones...</p>;
    if (error) return <p>Error cargando evoluciones</p>;

    const getEvolutionNames = (chain: EvolutionDetail): string[] => {
        const names = [chain.species.name];
        chain.evolves_to.forEach(evolution => {
            names.push(...getEvolutionNames(evolution));
        });
        return names;
    };

    const evolutionNames = evolutionChain ? getEvolutionNames(evolutionChain.chain) : [];

    return (
        <div>
            <h3>Cadena de Evolución</h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {evolutionNames.map((name, index) => (
                    <EvoCard key={name} style={{ minWidth: "120px" }}>
                        <p><strong>{index + 1}.</strong> {name}</p>
                    </EvoCard>
                ))}
            </div>
        </div>
    );
};