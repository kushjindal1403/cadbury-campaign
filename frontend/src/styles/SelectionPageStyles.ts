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

export const heroWrapperStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "1rem",
};

export const sideImageStyle: CSSProperties = {
    width: "50px",
    height: "auto",
};

export const heroImageStyle: CSSProperties = {
    marginTop: "-30px",
    maxWidth: "300px",
    width: "60vw",
    height: "auto",
};

export const labelStyle: CSSProperties = {
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    textAlign: "center",
};

export const scrollWrapperStyle: CSSProperties = {
    width: "100%",
    maxWidth: "400px",
    maxHeight: "400px",
    overflowY: "auto",
    paddingBottom: "80px",
};

export const buttonStyle: CSSProperties = {
    position: "fixed",
    bottom: "20px",
    width: "40%",
    maxWidth: "400px",
    padding: "1rem",
    backgroundColor: "#B9861F",
    color: "black",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    zIndex: 100,
};

export const bottomRightStyle: CSSProperties = {
    position: "fixed",
    bottom: 30,
    right: 10,
    width: "50px",
    height: "auto",
    zIndex: 50,
};

