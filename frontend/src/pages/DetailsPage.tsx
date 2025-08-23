import { useState } from "react";
import { useNavigate } from "react-router-dom";
import progressBar1 from "./../assets/UI Images/progress bar1.png";
import DetailsPageImage from "./../assets/UI Images/Cap&Gift.png";
import bottomLeftImage from "./../assets/UI Images/Purple tone.png";
import sideLeftImage from "./../assets/UI Images/Asset 1.png";
import sideRightImage from "./../assets/UI Images/Balloon.png";

// import all styles
import {
    containerStyle,
    progressStyle,
    heroContainerStyle,
    heroStyle,
    sideImgStyle,
    formWrapperStyle,
    formStyle,
    inputStyle,
    buttonStyle,
    labelStyle,
    errorStyle,
    selectStyle,
    bottomLeftStyle,
} from "./../styles/DetailsPageStyles";

const DetailsPage = () => {
    const ageOptions = Array.from({ length: 120 }, (_, i) => i + 1);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        gender: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        age: "",
        gender: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const newErrors: typeof errors = { fullName: "", age: "", gender: "" };
        let valid = true;

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Name is required";
            valid = false;
        }
        if (!formData.age) {
            newErrors.age = "Age is required";
            valid = false;
        }
        if (!formData.gender) {
            newErrors.gender = "Gender is required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            navigate("/selector", { state: { details: formData } });
        }
    };

   

    return (
        <div style={containerStyle}>
            <img src={progressBar1} alt="Progress Bar" style={progressStyle} />
            <h3 style={labelStyle}>Tell us about your loved ones ....</h3>

            <div style={heroContainerStyle}>
                <img src={sideLeftImage} alt="Left Decoration" style={sideImgStyle} />
                <img src={DetailsPageImage} alt="Hero" style={heroStyle} />
                <img src={sideRightImage} alt="Right Decoration" style={sideImgStyle} />
            </div>

            <div style={formWrapperStyle}>
                <form style={formStyle} onSubmit={handleSubmit}>
                    <label style={labelStyle}>Their Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="xxxxx xxxxxxxxxxxx"
                        style={inputStyle}
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}

                    <label style={labelStyle}>How old they'll be this Birthday</label>
                    <select
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        style={selectStyle}
                    >
                        <option value="" disabled>
                            Select age
                        </option>
                        {ageOptions.map((age) => (
                            <option key={age} value={age}>
                                {age}
                            </option>
                        ))}
                    </select>
                    {errors.age && <span style={errorStyle}>{errors.age}</span>}

                    <label style={labelStyle}>Gender</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        style={selectStyle}
                    >
                        <option value="" disabled>
                            Select gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <span style={errorStyle}>{errors.gender}</span>}

                    <button type="submit" style={buttonStyle}>
                        Proceed
                    </button>
                </form>
            </div>

            <img src={bottomLeftImage} alt="Bottom Left" style={bottomLeftStyle} />
        </div>
    );
};

export default DetailsPage;
