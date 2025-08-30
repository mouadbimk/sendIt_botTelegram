## 📩 Telegram Contact Form

A professional contact form built with **HTML, CSS, and JavaScript (Parcel bundler)** that sends submissions directly to a **Telegram Bot** using the Bot API.

---

## ✨ Features

- 📬 Send form data (name, email, phone, address, city, subject, message) to a private Telegram chat.
- ✅ Client-side validation.
- 🎨 Clean and responsive form design.
- ⚡ Bundled with [Parcel](https://parceljs.org/) for easy development.

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/mouadbimk/sendIt_botTelegram
cd sendIt_botTelegram
```

## 2️⃣ Install dependencies

```bash
npm install
```

## 3️⃣ Configure environment variables

---

Create a .env file in the project root with the following values:

- ENDPOINT=https://api.telegram.org
  ENDPOINT=https://api.telegram.org

- BOT_TOKEN=your_bot_token_here
  BOT_TOKEN: Your bot token from @BotFather

- CHAT_ID=your_chat_id_here
  BOT_TOKEN: Your bot token from @BotFather

---

## 4️⃣ Run the project in dev mode

```bash
npm run dev
```

This will start a development server (usually on http://localhost:1234).

## 5️⃣ Build for production

```bash
npm run build
```

The output will be generated in the dist/ folder.

## 🛠 Project Structure

```bash
.
├── css/
│   └── app.css          # Global styles
├── js/
│   ├── main.js          # Form handling & validation
│   └── telegram.js      # sendMessage() function
├── index.html           # Contact form markup
├── package.json
├── .env                 # Environment variables (not committed)
└── README.md

```

## 📡 How It Works

- User fills the contact form.
- On submission, main.js intercepts the event and prevents reload.
- Data is formatted and sent to the Telegram Bot API (sendMessage).
- You receive the form details instantly in your private Telegram chat.
