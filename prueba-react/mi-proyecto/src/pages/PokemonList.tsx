import { PokemonCard } from "../components/PokemonCard";
import { usePokemonList } from "../hooks/usePokemonList";
import { GridContainer , Title} from "../styles/components";
import  { Link } from "react-router-dom";
import {    gradientBackgroundStyle,
    decorativeCircle1,
    decorativeCircle2,
    contentWrapper  } from "../styles/backgorund";

export const PokemonList = () => {
    const { data, isLoading, error } = usePokemonList();

    if (isLoading) return <p>Cargando...</p>;
    if (error instanceof Error) return <p>Error: {error.message}</p>;


    return (
        <div style={gradientBackgroundStyle}>
            <div style={decorativeCircle1}></div>
            <div style={decorativeCircle2}></div>

            <div style={contentWrapper}>
        <div>
            <Title>Pokémon</Title>
            <GridContainer>
                {data?.map((pokemon) => (

                    <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`} style={{ textDecoration: "none" }}>
                        <PokemonCard pokemon={pokemon} />
                    </Link>
                ))}
            </GridContainer>
        </div>
            </div>
        </div>
    );
};