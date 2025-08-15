import styled from "styled-components";

export const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: transform 0.2s ease;

    min-width: 300px;   /* tamaño mínimo horizontal */
    min-height: 300px;  /* tamaño mínimo vertical */
    width: auto;        /* crece si el contenido lo necesita */
    height: auto;       /* crece si el contenido lo necesita */

    background-color: #6a0dad;
    color: white;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
`;
export const EvoCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: transform 0.2s ease;
    /* tamaño mínimo vertical */
    width: auto;        /* crece si el contenido lo necesita */
    height: auto;       /* crece si el contenido lo necesita */

    background-color: #6a0dad;
    color: white;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
`;



export const GridContainer = styled.div`
    display: flex;
    justify-content: center; /* centra horizontal */
    align-items: center;     /* centra vertical */
    flex-wrap: wrap;         /* si hay varias, que pasen a la siguiente línea */
    gap: 20px;               /* espacio entre cartas */
    min-height: 100vh;       /* para que ocupe toda la pantalla */
`;
export const Title = styled.div`
    font-size: 3rem;         /* más grande */
    font-weight: bold;       /* negrita */
    text-align: center;      /* centrado */
    margin-bottom: 30px;     /* más espacio debajo */
    color: #222;             /* texto más oscuro */
    letter-spacing: 2px;     /* espacio entre letras */
`;

