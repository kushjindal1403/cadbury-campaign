Sure! Here's a clear, minimal setup including:

---

### ✅ `README.md`

### ✅ `db.sql` — SQL file to initialize your `users` table

---

## ✅ 1. `README.md`

````markdown
# 🎂 Cadbury Campaign - Birthday Lyrics Generator 🎶

A simple Node.js + Express backend that registers user info and generates unique birthday song lyrics using OpenAI's GPT API.

---

## 🚀 Features

- Register users with `name`, `email`, `phone`, `privacy`
- Generate unique birthday lyrics using OpenAI
- MySQL database connection
- Deployed on Render

---

## 🛠️ Technologies

- Node.js
- Express.js
- MySQL (freesqldatabase.com or any remote host)
- OpenAI GPT-4.0/4.1
- CORS for frontend compatibility
- Deployed with Render (Backend) and Vercel (Frontend)

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
````

---

### `POST /api/generate-lyrics`

Generates birthday lyrics based on user details and selected genre.

**Body:**

```json
{
  "details": {
    "fullName": "John",
    "age": "25",
    "gender": "male"
  },
  "selections": {
    "genre": "Rock"
  }
}
```

---

## 📦 Setup

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/cadbury-campaign.git
   cd cadbury-campaign/backend
   ```

2. Install dependencies

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
   npm start
   ```

---

## 🗄️ MySQL Setup

Run the following SQL to create the `users` table:

See `db.sql` below.

---

## 🌐 Deployment

* Backend deployed on **Render**
* Frontend deployed on **Vercel**
* Ensure both are allowed in CORS config.

---

## 📄 License

MIT – Use it freely!

````

---

## ✅ 2. `db.sql`

```sql
-- db.sql

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  privacy BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
````

---

### ✅ Final Notes

* Put `db.sql` in your root or backend folder for quick DB setup.
* Don't forget to `.gitignore` your `.env` file.
* Avoid committing secrets (e.g., OpenAI keys) — GitHub will block them.

Let me know if you want the **frontend `README`** too!
