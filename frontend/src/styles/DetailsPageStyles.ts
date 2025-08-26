
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

export const heroContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: "0.5rem",
    gap: "0.5rem",
};

export const heroStyle: CSSProperties = {
    marginTop: "-30px",
    maxWidth: "300px",
    width: "60vw",
    height: "auto",
};

export const sideImgStyle: CSSProperties = {
    width: "50px",
    height: "auto",
};

export const formWrapperStyle: CSSProperties = {
    width: "100%",
    maxWidth: "400px",
    zIndex: 0,
    position: "relative",
};

export const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};


export const buttonStyle: CSSProperties = {
    width: "40%",
    padding: "1rem",
    backgroundColor: "#B9861F",
    color: "black",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "1rem",
};

export const inputStyle: CSSProperties = {
    width: "100%",  
    padding: "1rem",
    marginBottom: "0.5rem",
    borderRadius: "25px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    appearance: "none",
    backgroundColor: "white",
    WebkitAppearance: "none" as any,
    MozAppearance: "none" as any,
    boxSizing: "border-box", 
};

export const selectStyle: CSSProperties = {
    ...inputStyle,
    backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='%23B9861F' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 15px center",
    backgroundSize: "40px 40px",
    paddingRight: "2.5rem",
};


export const labelStyle: CSSProperties = {
    alignSelf: "center",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
};

export const errorStyle: CSSProperties = {
    color: "red",
    fontSize: "0.85rem",
    marginBottom: "0.5rem",
    alignSelf: "flex-start",
};

export const bottomLeftStyle: CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 20,
    width: "50px",
    height: "auto",
    zIndex: -1,
};
