import { useEffect, useState } from "react";
import progressBar4 from "./../assets/UI Images/progress bar4.png";
import {
    containerStyle,
    progressStyle,
    labelStyle,
    lyricsBoxStyle,
    lyricsLineStyle,
    buttonStyle,
    errorStyle,
} from "./../styles/PlayPageStyles";
import { useLocation } from "react-router-dom";

const PlayPage = () => {
    const [imageError, setImageError] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

    const location = useLocation();
    const storedLyrics = localStorage.getItem("generatedLyrics");
    const lyrics = location.state?.lyrics || storedLyrics || "Lyrics not available";

    const singerVoice = location.state?.singerVoice || "Male";

    useEffect(() => {
        const loadVoices = () => {
            const synthVoices = window.speechSynthesis.getVoices();

            const voice = synthVoices.find((voice) => {
                const name = voice.name.toLowerCase();
                if (singerVoice.toLowerCase() === "female") {
                    return (
                        name.includes("female") ||
                        name.includes("zira") ||
                        name.includes("susan") ||
                        name.includes("mary") ||
                        name.includes("frau")
                    );
                } else {
                    // Male fallback
                    return (
                        name.includes("david") ||
                        name.includes("male") ||
                        name.includes("john") ||
                        name.includes("mann")
                    );
                }
            }) || synthVoices[0]; 

            setSelectedVoice(voice);
        };

        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }

        loadVoices();
    }, [singerVoice]);

    const handleImageError = () => setImageError(true);

    const handlePlayClick = () => {
        if (!window.speechSynthesis) {
            alert("Sorry, your browser does not support text to speech.");
            return;
        }

        if (speaking) {
            window.speechSynthesis.cancel();
            setSpeaking(false);
            return;
        }

        const utterance = new SpeechSynthesisUtterance(lyrics);
        utterance.lang = selectedVoice?.lang || "en-US";
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        utterance.onstart = () => setSpeaking(true);
        utterance.onend = () => setSpeaking(false);
        utterance.onerror = () => setSpeaking(false);

        window.speechSynthesis.speak(utterance);
    };

    return (
        <div style={containerStyle}>
            {!imageError ? (
                <img
                    src={progressBar4}
                    alt="Progress Bar"
                    style={progressStyle}
                    onError={handleImageError}
                />
            ) : (
                <div style={errorStyle}>Failed to load progress bar</div>
            )}

            <h3 style={labelStyle}>Your song's lyrics are ready.</h3>

            <div style={lyricsBoxStyle}>
                {lyrics.split("\n").map((line: string, idx: number) => (
                    <p key={idx} style={lyricsLineStyle}>
                        {line}
                    </p>
                ))}
            </div>

            <button style={buttonStyle} onClick={handlePlayClick}>
                {speaking ? "Stop Playing" : "Play Song"}
            </button>
        </div>
    );
};

export default PlayPage;
