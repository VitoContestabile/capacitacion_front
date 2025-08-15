import styled from "styled-components";

// El "$primary" es una prop opcional para diferenciar estilos
const Button = styled.button<{ $primary?: boolean }>`
    background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
    color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
`;

export default function StyledButtons() {
    return (
        <div>
            <Button>Normal</Button>
            <Button $primary>Primary</Button>
        </div>
    );
}
