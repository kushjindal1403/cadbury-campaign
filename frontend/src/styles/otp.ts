import { CSSProperties } from "react";

export const overlayStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
};

export const containerStyle: CSSProperties = {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    minWidth: "300px",
};

export const headingStyle: CSSProperties = {
    color: "#3C0063",
    fontSize: "30px",
};

export const inputContainerStyle: CSSProperties = {
    display: "flex",
    gap: "0.5rem",
};

export const inputStyle: CSSProperties = {
    width: "40px",
    height: "40px",
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#3C0063",
    color: "white",
};

export const resendStyle: CSSProperties = {
    alignSelf: "flex-end",
    fontSize: "0.9rem",
    color: "#3C0063",
    fontWeight: 700,
    cursor: "pointer",
    userSelect: "none",
};

export const buttonContainerStyle: CSSProperties = {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
};

export const submitButtonStyle: CSSProperties = {
    padding: "0.8rem 2rem",
    backgroundColor: "#B9861F",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
};

export const errorStyle: React.CSSProperties = {
    color: "red",
    fontSize: "0.85rem",
    marginTop: "0.5rem",
    textAlign: "center",
};
