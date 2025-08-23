
import { CSSProperties } from "react";

export const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    cursor: "pointer",
};

export const imageStyle: CSSProperties = {
    maxWidth: "80%",
    height: "auto",
    objectFit: "contain",
};

export const errorStyle: CSSProperties = {
    color: "red",
    fontSize: "1.2rem",
    textAlign: "center",
};
