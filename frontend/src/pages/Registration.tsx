import { useState } from "react";
import {
    containerStyle, progressStyle, heroStyle, headingStyle,
    formWrapperStyle, formStyle, inputStyle, radioContainerStyle,
    radioLabelStyle, buttonStyle, bottomLeftStyle, bottomRightStyle,
    errorStyle
} from "./../styles/RegistrationPageStyles";
import progressBar from "./../assets/UI Images/progress bar.png";
import registerPageImage from "./../assets/UI Images/Celebrations(Bg).png";
import bottomLeftImage from "./../assets/UI Images/Asset 1.png";
import bottomRightImage from "./../assets/UI Images/Yellow tone.png";
import OtpPopup from "../components/otp";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [showOtp, setShowOtp] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        terms: false,
        privacy: false,
    });
    const [errors, setErrors] = useState({
        fullName: "",
        phone: "",
        email: "",
        terms: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        let newValue = value;

        if (name === "phone") {
            newValue = value.replace(/\D/g, "").slice(0, 10);
        }
        if (name === "fullName") {
            newValue = value.replace(/[^a-zA-Z\s]/g, "").slice(0, 50);
        }
        setFormData((prev) => ({
            ...prev,
            [name]: type === "radio" || type === "checkbox" ? checked : newValue,
        }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const newErrors = { fullName: "", phone: "", email: "", terms: "" };
        let valid = true;

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
            valid = false;
        }
        if (!formData.phone.match(/^\d{10}$/)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
            valid = false;
        }
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = "Enter a valid email";
            valid = false;
        }
        if (!formData.terms) {
            newErrors.terms = "You must accept Terms & Conditions";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) setShowOtp(true);
    };

    const handleOtpSubmit = async () => {
        try {
            const response = await fetch("https://cadbury-campaign.onrender.com/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    phone: formData.phone,
                    email: formData.email,
                    privacy: formData.privacy,
                }),
            });
            const data = await response.json();
            if (data.success) {
                alert("Registration successful!");
                setShowOtp(false);
                navigate("/details",{ state: { email: formData.email }});
            } else {
                alert(data.error || "Something went wrong");
            }
        } catch (err) {
            console.error(err);
            alert("Server error. Please try again later.");
        }
    };

    return (
        <div style={containerStyle}>
            <img src={progressBar} alt="Progress Bar" style={progressStyle} />
            <div>
                <img src={registerPageImage} alt="Hero" style={heroStyle} />
            </div>
            <h4 style={headingStyle}>Register to Create</h4>

            <div style={formWrapperStyle}>
                <form style={formStyle} onSubmit={handleSubmit}>
                   
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        style={inputStyle}
                        value={formData.phone}
                        onChange={handleChange}
                        
                    />
                    {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        style={inputStyle}
                        value={formData.fullName}
                        onChange={handleChange}
                        maxLength={25}
                    />
                    {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        style={inputStyle}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span style={errorStyle}>{errors.email}</span>}

                    <div style={radioContainerStyle}>
                        <label style={radioLabelStyle}>
                            <input
                                type="radio"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                            />
                            I accept Terms & Conditions and Privacy Policy of Mondelez (Cadbury)
                        </label>
                        {errors.terms && <span style={errorStyle}>{errors.terms}</span>}
                    </div>

                    <div style={radioContainerStyle}>
                        <label style={radioLabelStyle}>
                            <input
                                type="radio"
                                name="privacy"
                                checked={formData.privacy}
                                onChange={handleChange}
                            />
                            I would like to receive promotional communication from Mondelez (Cadbury)
                        </label>
                    </div>

                    <button type="submit" style={buttonStyle}>
                        Submit
                    </button>
                </form>
            </div>

            {showOtp && <OtpPopup onSubmit={handleOtpSubmit} />}

            <img src={bottomLeftImage} alt="Bottom Left" style={bottomLeftStyle} />
            <img src={bottomRightImage} alt="Bottom Right" style={bottomRightStyle} />
        </div>
    );
};

export default RegistrationPage;