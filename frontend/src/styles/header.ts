import { CSSProperties } from "react";

export const headerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#240C4F",
    flexWrap: "wrap",
    padding: "0.5rem 1rem",
};

export const logoStyle: CSSProperties = {
    paddingLeft: "1rem",
    width: "25vw",
    maxWidth: "80px",
    minWidth: "40px",
    height: "auto",
};

export const heroLogoStyle: CSSProperties = {
    width: "50vw",
    maxWidth: "150px",
    minWidth: "80px",
    height: "auto",
};

export const drawerToggleStyle: CSSProperties = {
    width: "40px",
    height: "30px",
    cursor: "pointer",
    marginLeft: "10px",
    position: "relative",
    borderRadius: "5px",
    boxSizing: "content-box",

    backgroundImage: `
    linear-gradient(to left, white 0%, white 40%),
    linear-gradient(to left, white 0%, white 100%),
    linear-gradient(to left, white 0%, white 40%)
  `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 5px, 0 13px, 0 21px",
    backgroundSize: "16px 3px, 32px 3px, 16px 3px",
};

