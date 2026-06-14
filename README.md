# ◈ Skyla — Weather App

A clean, responsive weather app built with vanilla HTML, CSS, and JavaScript.
Fetches real-time weather data using the OpenWeatherMap API.

## 🌟 Features
- Search weather for any city in the world
- Displays temperature, condition, humidity, wind speed, feels-like, visibility
- Loading state and error handling
- Fully responsive (mobile + desktop)

## 🚀 Setup Instructions

### 1. Get a Free API Key
- Go to [https://openweathermap.org](https://openweathermap.org)
- Click **Sign Up** → create a free account
- Go to your account dashboard → **API Keys** tab
- Copy the default key (or generate a new one)
- ⚠️ New keys activate within ~10 minutes

### 2. Add Your API Key
Open `script.js` and replace the placeholder:
```js
const API_KEY = "YOUR_API_KEY_HERE";
// Replace with your actual key, e.g.:
const API_KEY = "a1b2c3d4e5f6g7h8i9j0";
```

### 3. Run the Project
- Open the project folder in VS Code
- Right-click `index.html` → **Open with Live Server**
  *(Install the "Live Server" extension if not already installed)*

## 📁 Folder Structure
```
weather-app/
├── index.html     ← App structure (HTML)
├── style.css      ← All styles and design tokens
├── script.js      ← API logic, DOM manipulation
└── README.md      ← This file
```

## ☁️ API Used
[OpenWeatherMap Current Weather API](https://openweathermap.org/current)
— Free tier: 60 calls/minute, no credit card required.

## 📤 Uploading to GitHub

```bash
# 1. Initialize a git repo inside the project folder
git init

# 2. Stage all files
git add .

# 3. Make your first commit
git commit -m "Initial commit: Skyla Weather App"

# 4. Go to github.com → New Repository → name it "weather-app"
#    Do NOT check "Add a README" (we already have one)

# 5. Link your local repo to GitHub (copy URL from GitHub)
git remote add origin https://github.com/YOUR_USERNAME/weather-app.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

## 🧑‍💻 Built By
[Your Name] — Portfolio Project
