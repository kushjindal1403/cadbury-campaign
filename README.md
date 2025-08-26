# 🎂 Cadbury Campaign - Birthday Lyrics Generator 🎶

A full-stack project to create personalized birthday songs. Users can enter their loved one's details, select song preferences, and generate unique birthday lyrics using OpenAI's GPT API.

---

## 🚀 Features

- Register users with `name`, `email`, `phone`, `privacy`
- Save loved one’s details (name, age, gender)
- Save user-selected song customizations (genre, mood, singer's voice)
- Generate unique birthday lyrics using OpenAI GPT
- Responsive frontend with selection pages and preview
- MySQL database connection
- Deployed backend on Render, frontend on Vercel

---

## 🛠️ Technologies

- **Frontend:** React, TypeScript, TailwindCSS  
- **Backend:** Node.js, Express.js, TypeScript  
- **Database:** MySQL  
- **AI:** OpenAI GPT-4.1-mini  
- **Deployment:** Render (Backend), Vercel (Frontend)  
- **Other:** Axios, React Router, CORS, dotenv

---

## 🧪 API Endpoints

### `POST /api/register`
Registers a new user.

**Body:**
```json
{
  "fullName": "John Doe",
  "phone": "1234567890",
  "email": "john@example.com",
  "privacy": true
}
```

---

### `POST /api/save-details`
Saves loved one’s details.

**Body:**
```json
{
  "email": "john@example.com",
  "fullName": "Jane Doe",
  "age": 25,
  "gender": "female"
}
```

---

### `POST /api/save-selections`
Saves song customization selections.

**Body:**
```json
{
  "email": "john@example.com",
  "selections": {
    "Genre": "Pop",
    "Mood": "Happy",
    "Singer's Voice": "Female"
  }
}
```

---

### `POST /api/generate-lyrics`
Generates birthday lyrics based on user details and selections.

**Body:**
```json
{
  "details": {
    "fullName": "Jane",
    "age": 25,
    "gender": "female"
  },
  "selections": {
    "Genre": "Pop",
    "Mood": "Happy",
    "Singer's Voice": "Female"
  }
}
```

---

## 📦 Setup

1. Clone the repo:

```bash
git clone https://github.com/your-username/cadbury-campaign.git
cd cadbury-campaign/backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```
PORT=5000
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_db_name
OPENAI_API_KEY=your_openai_key
```

4. Run the server:

```bash
npm run dev
```

---

## 🗄️ MySQL Setup

Run the following SQL to create the required tables:

```sql
-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  privacy BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Loved One Details Table
CREATE TABLE IF NOT EXISTS details (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  gender VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Song Selections Table
CREATE TABLE IF NOT EXISTS selections (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  genre VARCHAR(50),
  mood VARCHAR(50),
  singer_voice VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## 🌐 Deployment

- Backend deployed on **Render**  
- Frontend deployed on **Vercel**  
- Make sure both frontend and backend URLs are added to the CORS whitelist

---

## 📄 License

MIT – Use it freely!
