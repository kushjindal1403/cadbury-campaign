import { CSSProperties } from "react";

export const containerStyle: CSSProperties = {
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    border: "2px solid #B9861F",
    borderRadius: "1rem",
};

export const headerStyle: CSSProperties = {
    textAlign: "center",
    backgroundColor: "#B9861F",
    color: "black",
    fontWeight: "bold",
    fontSize: "1.1rem",
    borderRadius: "1rem",
    marginBottom: "1rem",
};

export const optionsContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    paddingBottom: "0.5rem",
};

export const optionItemStyle = (isSelected: boolean): CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "0.5rem",
    border: isSelected ? "2px solid yellow" : "2px solid transparent",
    transform: isSelected ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.2s",
    opacity: 1,
});

export const imageContainerStyle = (isSelected: boolean, isSquare: boolean): CSSProperties => ({
    width: "40px",
    height: "40px",
    borderRadius: isSquare ? "0.5rem" : "50%", 
    backgroundColor: "white",
    border: `2px solid ${isSelected ? "#B9861F" : "white"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const imageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
};

export const labelStyle: CSSProperties = {
    marginTop: "0.5rem",
    color: "white",
    fontSize: "0.7rem",
    textAlign: "center",
};

export const errorBoundaryStyle: CSSProperties = {
    padding: "1rem",
    color: "red",
    textAlign: "center",
};
