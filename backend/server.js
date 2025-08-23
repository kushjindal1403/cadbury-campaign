import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "bday_song_db",
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/api/register", (req, res) => {
  const { fullName, phone, email, privacy } = req.body;
  if (!fullName || !phone || !email) {
    return res
      .status(400)
      .json({ error: "All required fields must be filled." });
  }
  const sql =
    "INSERT INTO users (fullName, phone, email, privacy) VALUES (?, ?, ?, ?)";
  db.query(sql, [fullName, phone, email, privacy], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: "User registered successfully!" });
  });
});

app.post("/api/generate-lyrics", async (req, res) => {
  try {
    const { details, selections } = req.body;
    if (!details || !selections) {
      return res
        .status(400)
        .json({ error: "Details and selections are required." });
    }

    const prompt = `
Wish a happy birthday to ${details.fullName}.

Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. The lyrics should use simple, short, and easy to pronounce words as much as possible.

Using the above information, please write 16 lines of ${selections.genre} lyrics that I can dedicate to ${details.gender} for ${details.gender} birthday. Each line can have maximum of 8 words or 40 characters.

The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that writes birthday lyrics.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 500,
      temperature: 0.8,
    });

    const lyrics = response.choices[0].message.content;

    res.json({ lyrics });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate lyrics." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
