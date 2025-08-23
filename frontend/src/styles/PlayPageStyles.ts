
import { CSSProperties } from "react";

export const containerStyle: CSSProperties = {
    position: "relative",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

export const progressStyle: CSSProperties = {
    maxWidth: "70%",
    height: "auto",
    marginBottom: "0.5rem",
    marginTop: "-1rem",
};

export const labelStyle: CSSProperties = {
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    textAlign: "center",
};

export const lyricsBoxStyle: CSSProperties = {
    width: "100%",
    maxWidth: "400px",
    height: "350px",
    overflowY: "auto",
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "15px",
    color: "#333",
    textAlign: "left",
    marginBottom: "120px",
    fontWeight: 600,
};

export const lyricsLineStyle: CSSProperties = {
    margin: "0 0 0.5rem 0",
};

export const buttonStyle: CSSProperties = {
    position: "fixed",
    bottom: "20px",
    width: "60%",
    maxWidth: "400px",
    padding: "1rem",
    backgroundColor: "#B9861F",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    zIndex: 100,
};

export const errorStyle: CSSProperties = {
    color: "red",
    fontSize: "1rem",
    marginTop: "1rem",
    textAlign: "center",
};
