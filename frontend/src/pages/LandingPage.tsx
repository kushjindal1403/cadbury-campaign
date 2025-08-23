import { useState } from "react";
import { useNavigate } from "react-router-dom";
import landingImage from "./../assets/UI Images/Celebrations(Bg) - hashtag.png";
import { containerStyle, imageStyle, errorStyle } from "./../styles/LandingPageStyles";

const LandingPage = () => {
    const navigate = useNavigate();
    const [imageError, setImageError] = useState(false);

    const handleClick = () => {
        navigate("/register");
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div style={containerStyle} onClick={handleClick}>
            {!imageError ? (
                <img
                    src={landingImage}
                    alt="Landing"
                    style={imageStyle}
                    onError={handleImageError}
                />
            ) : (
                <div style={errorStyle}>Failed to load landing image</div>
            )}
        </div>
    );
};

export default LandingPage;
