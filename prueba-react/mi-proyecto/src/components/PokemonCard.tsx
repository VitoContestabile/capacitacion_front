import type { PokemonDetails } from "../types/pokemon";
import { Card } from "../styles/components";

interface PokemonCardProps {
    pokemon: PokemonDetails;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    // Usar GIF si está disponible, si no usar la imagen estática
    const imageUrl = pokemon.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default
        || pokemon.sprites.front_default;

    return (
        <Card>
            <h3>{pokemon.name}</h3>
            <img src={imageUrl} alt={pokemon.name} />
            <p><strong>Altura:</strong> {pokemon.height}</p>
            <p><strong>Peso:</strong> {pokemon.weight}</p>
            <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
        </Card>
    );
};