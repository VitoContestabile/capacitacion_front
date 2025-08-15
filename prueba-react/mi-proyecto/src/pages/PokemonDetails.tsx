import { useParams, Link } from "react-router-dom";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
import { PokemonEvolutions } from "../components/PokemonEvolutions";
import { Card } from "../styles/components";
import {    gradientBackgroundStyle,
    decorativeCircle1,
    decorativeCircle2,
    contentWrapper  } from "../styles/backgorund";

export const PokemonDetails = () => {
    const { name } = useParams<{ name: string }>();
    const { data: pokemon, isLoading, error } = usePokemonDetails(name!);

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error cargando detalles</p>;
    if (!pokemon) return <p>Pokémon no encontrado</p>;

    return (
        <div style={gradientBackgroundStyle}>
            <div style={decorativeCircle1}></div>
            <div style={decorativeCircle2}></div>

            <div style={contentWrapper}>
                <div style={{ padding: "20px" }}>
                    <Link to="/" style={{marginBottom: "20px", display: "inline-block", color: "white", textDecoration: "none"}}>
                        ← Volver a la lista
                    </Link>

                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <Card style={{ flex: "1", minWidth: "300px" }}>
                            <h1>{pokemon.name}</h1>
                            <img
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                style={{ width: "200px", height: "200px" }}
                            />
                            <p><strong>ID:</strong> {pokemon.id}</p>
                            <p><strong>Altura:</strong> {pokemon.height}</p>
                            <p><strong>Peso:</strong> {pokemon.weight}</p>
                            <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
                        </Card>

                        <div>
                            <PokemonEvolutions pokemonId={pokemon.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};