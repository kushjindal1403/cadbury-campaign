import React, { useState } from "react";
import {
  overlayStyle,
  containerStyle,
  headingStyle,
  inputContainerStyle,
  inputStyle,
  resendStyle,
  buttonContainerStyle,
  submitButtonStyle,
  errorStyle,
} from "./../styles/otp";

interface OtpPopupProps {
  onSubmit: () => void; // called only when OTP is valid
}

const DEFAULT_OTP = "1234";

const OtpPopup: React.FC<OtpPopupProps> = ({ onSubmit }) => {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otpValues];
      newOtp[index] = value;
      setOtpValues(newOtp);

      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
    if (error) setError(null);
  };

  const handleSubmit = () => {
    const enteredOtp = otpValues.join("");
    if (enteredOtp !== DEFAULT_OTP) {
      setError("Invalid OTP. Please try again.");
      return;
    }
    setError(null);
    onSubmit();
  };

  return (
    <div style={overlayStyle}>
      <div style={containerStyle}>
        <h3 style={headingStyle}>Enter OTP</h3>
        <div style={inputContainerStyle}>
          {otpValues.map((value, idx) => (
            <input
              key={idx}
              id={`otp-${idx}`}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(idx, e.target.value)}
              style={inputStyle}
              autoFocus={idx === 0}
            />
          ))}
        </div>
        {error && <div style={errorStyle}>{error}</div>}
        <a href="#" onClick={(e) => e.preventDefault()} style={resendStyle}>
          Resend OTP
        </a>
        <div style={buttonContainerStyle}>
          <button onClick={handleSubmit} style={submitButtonStyle}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpPopup;
