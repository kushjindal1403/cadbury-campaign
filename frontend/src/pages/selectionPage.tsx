import { useEffect, useRef, useState } from "react";
import OptionSelector from "./../components/optionSelector";
import progressBar2 from "./../assets/UI Images/progress bar2.png";
import SelectionPageImage from "./../assets/UI Images/Headphone.png";
import bottomRightImage from "./../assets/UI Images/Asset 1.png";
import sideLeftImage from "./../assets/UI Images/Purple Music Tone.png";
import sideRightImage from "./../assets/UI Images/Balloon2.png";

import { categories } from "./../data/SelectionPageData";
import {
    containerStyle,
    progressStyle,
    heroWrapperStyle,
    sideImageStyle,
    heroImageStyle,
    labelStyle,
    scrollWrapperStyle,
    buttonStyle,
    bottomRightStyle,
} from "./../styles/SelectionPageStyles";

import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

interface LyricsResponse {
    lyrics: string;
}

const SelectionPage = () => {
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
    const [lastVisible, setLastVisible] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const lastCategoryRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    
    const details = location.state?.details;
   

    useEffect(() => {
        if (!details) {
            navigate("/details");
        }
    }, [details, navigate]);
    
    const handleSelect = (categoryTitle: string, value: string) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [categoryTitle]: value, 
        }));
        setError("");
    };

    const handleProceed = async () => {
        const email = location.state?.email;
        const missingGenre = categories.find(
            (c) => c.title === "Genre" && !selectedOptions[c.title]
        );
        if (missingGenre) {
            setError(`Please select ${missingGenre.title}`);
            return;
        }

        try {
            setLoading(true);
            console.log("Sending data to backend:", { details, selections: selectedOptions });


            const response = await axios.post<LyricsResponse>(
                "https://cadbury-campaign.onrender.com/api/generate-lyrics",
                { details, selections: selectedOptions }
            );

            const lyrics = response.data.lyrics;
            localStorage.setItem("generatedLyrics", lyrics);


            await axios.post(
                "https://cadbury-campaign.onrender.com/api/save-selections",
                {
                    email,
                    selections: selectedOptions
                }
            );

            navigate("/play", { state: { lyrics, singerVoice: selectedOptions["Singer's Voice"] || "Male" } });

        } catch (err) {
            console.error(err);
            setError("Failed to generate lyrics or save selections. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setLastVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (lastCategoryRef.current) observer.observe(lastCategoryRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div style={containerStyle}>
            <img src={progressBar2} alt="Progress Bar" style={progressStyle} />
            <h3 style={labelStyle}>What would you like their song's vibe to be?</h3>

            <div style={heroWrapperStyle}>
                <img src={sideLeftImage} alt="Left" style={sideImageStyle} />
                <img src={SelectionPageImage} alt="Hero" style={heroImageStyle} />
                <img src={sideRightImage} alt="Right" style={sideImageStyle} />
            </div>

            <div style={scrollWrapperStyle}>
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        ref={idx === categories.length - 1 ? lastCategoryRef : null}
                        style={{
                            marginBottom: "2rem",
                            opacity: idx === categories.length - 1 ? (lastVisible ? 1 : 0) : 1,
                            transition: "opacity 0.3s ease",
                        }}
                    >
                        <OptionSelector
                            title={category.title}
                            options={category.options}
                            selected={selectedOptions[category.title]}
                            onSelect={(value) => handleSelect(category.title, value)}
                        />
                    </div>
                ))}
            </div>

            {error && <span style={{ color: "red", marginBottom: "1rem" }}>{error}</span>}

            <button style={buttonStyle} onClick={handleProceed} disabled={loading}>
                {loading ? "Generating Lyrics..." : "Proceed"}
            </button>

            <img src={bottomRightImage} alt="Bottom Right" style={bottomRightStyle} />
        </div>
    );
};

export default SelectionPage;
