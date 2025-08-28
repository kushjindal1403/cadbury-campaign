import { CSSProperties } from "react";

export const containerStyle: CSSProperties = {
    width: "100%",
    maxWidth: "350px",
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
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem",
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
    transform: isSelected ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.2s",
    opacity: 1,
});

export const imageContainerStyle = (
    isSelected: boolean,
    isSquare: boolean
): CSSProperties => ({
    width: isSquare ? "80px" : "40px",
    height: isSquare ? "50px" : "40px",
    borderRadius: isSquare ? "0.5rem" : "50%",
    backgroundColor: isSquare
        ? (isSelected ? "#B9861F" : "transparent")  
        : (isSelected ? "#B9861F" : "white"), 
    border: !isSquare ? `2px solid ${isSelected ? "#B9861F" : "white"}` : "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    filter: isSelected ? "drop-shadow(0px 0px 4px #B9861F)" : "none",
});


export const imageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    mixBlendMode: "multiply"
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
