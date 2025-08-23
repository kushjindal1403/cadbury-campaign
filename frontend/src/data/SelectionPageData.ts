import calm from "./../assets/UI Images/Calm.png";
import funny from "./../assets/UI Images/Funny.png";
import happy from "./../assets/UI Images/Happy.png";
import romantic from "./../assets/UI Images/Romantic.png";
import motivational from "./../assets/UI Images/Motivational.png";
import rap from "./../assets/UI Images/Rap.png";
import rock from "./../assets/UI Images/Rock.png";
import pop from "./../assets/UI Images/Pop.png";
import desi from "./../assets/UI Images/Desi.png";
import edm from "./../assets/UI Images/EDM.png";
import male from "./../assets/UI Images/MAle.png";
import female from "./../assets/UI Images/Female.png";

export const categories = [
    {
        title: "Genre",
        options: [
            { label: "Rap", image: rap },
            { label: "Rock", image: rock },
            { label: "Pop", image: pop },
            { label: "Desi", image: desi },
            { label: "EDM", image: edm },
        ],
    },
    {
        title: "Mood",
        options: [
            { label: "Calm", image: calm },
            { label: "Funny", image: funny },
            { label: "Happy", image: happy },
            { label: "Romantic", image: romantic },
            { label: "Motivational", image: motivational },
        ],
    },
    {
        title: "Singer's Voice",
        options: [
            { label: "Male", image: male },
            { label: "Female", image: female },
        ],
    },
];
