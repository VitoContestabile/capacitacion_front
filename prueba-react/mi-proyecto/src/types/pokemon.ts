export type PokemonBasic = {
    name: string;
    url: string;
};

export type PokemonDetails = {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
        versions: {
            'generation-v': {
                'black-white': {
                    animated: {
                        front_default: string;
                    };
                };
            };
        };
    };
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    species: {
        url: string;
    };
};
export type EvolutionChain = {
    id: number;
    chain: EvolutionDetail;
};

export type EvolutionDetail = {
    species: {
        name: string;
        url: string;
    };
    evolves_to: EvolutionDetail[];
};

export type Species = {
    evolution_chain: {
        url: string;
    };
};