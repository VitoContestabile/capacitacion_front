// styles/backgroundStyles.ts
import type { CSSProperties } from 'react';

export const gradientBackgroundStyle: CSSProperties = {
    minHeight: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "relative",
    overflow: "hidden",
    margin: 0,
    padding: 0
};

export const decorativeCircle1: CSSProperties = {
    position: "absolute",
    top: "-50px",
    right: "-50px",
    width: "200px",
    height: "200px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    filter: "blur(40px)",
    zIndex: 0
};

export const decorativeCircle2: CSSProperties = {
    position: "absolute",
    bottom: "-100px",
    left: "-100px",
    width: "300px",
    height: "300px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "50%",
    filter: "blur(60px)",
    zIndex: 0
};

export const contentWrapper: CSSProperties = {
    position: "relative",
    zIndex: 10,
    width: "100%",
    minHeight: "100vh"
};

// Estilo para aplicar al body (opcional, para eliminar márgenes por defecto)
export const bodyResetStyle: CSSProperties = {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
};