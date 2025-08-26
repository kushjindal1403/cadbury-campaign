import React, { Component, ReactNode } from "react";
import {
  containerStyle,
  headerStyle,
  optionsContainerStyle,
  optionItemStyle,
  imageContainerStyle,
  imageStyle,
  labelStyle,
  errorBoundaryStyle,
} from "./../styles/optionSelector";

type Option = {
  label: string;
  image: string;
};

type OptionSelectorProps = {
  title: string;
  options: Option[];
  selected?: string;
  onSelect: (value: string) => void;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class OptionSelectorErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div style={errorBoundaryStyle}>Something went wrong while loading options.</div>;
    }
    return this.props.children;
  }
}

const OptionSelector: React.FC<OptionSelectorProps> = ({
  title,
  options,
  selected,
  onSelect,
}) => {
  
  return (
    <OptionSelectorErrorBoundary>
      <div style={containerStyle}>
        <div style={headerStyle}>{title}</div>
        <div style={optionsContainerStyle}>
          {options.map((item, index) => {
            const isSelected = selected === item.label;
            const isSquare = item.label === "Male" || item.label === "Female";

            

            return (
              <div
                key={index}
                onClick={() => onSelect(item.label)}
                style={optionItemStyle(isSelected)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onSelect(item.label);
                  }
                }}
              >
                <div style={imageContainerStyle(isSelected, isSquare)}>
                  <img src={item.image} alt={item.label} style={imageStyle} />
                </div>
                <p style={labelStyle}>{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </OptionSelectorErrorBoundary>
  );
};

export default OptionSelector;
