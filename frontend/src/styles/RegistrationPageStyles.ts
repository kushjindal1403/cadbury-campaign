
import { CSSProperties } from "react";

export const containerStyle: CSSProperties = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    overflow: "hidden",
    zIndex: 0,
};

export const progressStyle: CSSProperties = {
    maxWidth: "70%",
    height: "auto",
    marginBottom: "0.5rem",
    marginTop: "-1rem",
};

export const heroStyle: CSSProperties = {
    marginTop: "-30px",
    maxWidth: "300px",
    width: "80vw",
    height: "auto",
};

export const headingStyle: CSSProperties = {
    textAlign: "center",
    color: "white",
    marginTop: "-45px",
    marginBottom: "1rem",
};

export const formWrapperStyle: CSSProperties = {
    width: "100%",
    maxWidth: "400px",
    zIndex: 0,
};

export const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

export const inputStyle: CSSProperties = {
    width: "90%",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "25px",
    fontSize: "1rem",
    border: "1px solid #ccc",
};

export const radioContainerStyle: CSSProperties = {
    marginBottom: "0.2rem",
    width: "90%",
};

export const radioLabelStyle: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    color: "white",
    lineHeight: "1.3rem",
};

export const buttonStyle: CSSProperties = {
    width: "60%",
    padding: "1rem",
    backgroundColor: "#B9861F",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "1rem",
};

export const bottomLeftStyle: CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100px",
    height: "auto",
    zIndex: -1,
};

export const bottomRightStyle: CSSProperties = {
    position: "absolute",
    bottom: 9,
    right: 9,
    width: "50px",
    height: "auto",
    zIndex: -1,
};

export const errorStyle: CSSProperties = {
    color: "red",
    fontSize: "0.85rem",
    marginBottom: "0.5rem",
    alignSelf: "flex-start",
};
