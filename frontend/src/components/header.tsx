import React, { Component, ReactNode } from "react";
import logo from "./../assets/UI Images/Cadbury Logo.png";
import heroLogo from "./../assets/UI Images/2d logo.png";
import {
  headerStyle,
  logoStyle,
  heroLogoStyle,
  drawerToggleStyle,
} from "./../styles/header";

type ErrorBoundaryState = {
  hasError: boolean;
};

class HeaderErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Header error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <header style={{ ...headerStyle, justifyContent: "center", color: "red" }}>
          Something went wrong in the header.
        </header>
      );
    }
    return this.props.children;
  }
}

const Header: React.FC = () => {
  return (
    <HeaderErrorBoundary>
      <header style={headerStyle}>
        <img src={logo} alt="Cadbury Logo" style={logoStyle} />

        <img src={heroLogo} alt="Hero Logo" style={heroLogoStyle} />

  
        <div style={drawerToggleStyle} aria-label="Open drawer" role="button" tabIndex={0} />
      </header>
    </HeaderErrorBoundary>
  );
};

export default Header;
