# 🌗 React Theme Toggle (Light/Dark Mode)

A clean and reusable **Light/Dark theme toggle** built using React and Context API.
This project demonstrates global state management, UI interaction, and persistent theming using localStorage.

---

## 🚀 Features

* 🌞 Light / 🌙 Dark mode toggle
* 💾 Theme persistence using localStorage
* ⚛️ Global state management with Context API
* 🎨 Smooth toggle animation
* ♿ Accessible button-based UI
* 📱 Responsive design

---

## 🛠️ Tech Stack

* React.js
* Context API
* CSS Modules
* React Icons

---

## 📸 Preview

<img width="806" height="1638" alt="image" src="https://github.com/user-attachments/assets/b52d56b2-3ec0-499d-8a1c-b4196b7c4cf3" />
<img width="806" height="1638" alt="image" src="https://github.com/user-attachments/assets/f2cf1776-e869-478b-99e8-5b5b5809423a" />


---

## ⚙️ How It Works

* Theme state is managed globally using **Context API**
* User preference is stored in **localStorage**
* On toggle, theme updates and applies via `data-theme` attribute on `<html>`
* CSS handles theme switching using attribute selectors

---

## 📂 Project Structure

```
src/
│
├── Context/
│   └── ThemeContext.js
│
├── components/
│   └── ThemeToggle/
│       ├── ThemeToggle.jsx
│       └── theme.module.css
│
└── App.jsx
```

---

## 🧠 What I Learned

* Managing global state using Context API
* Persisting UI state with localStorage
* Building reusable UI components
* Improving accessibility with semantic HTML
* Handling UI animations with CSS

---

## 🔗 Live Demo

https://react-theme-switch-six.vercel.app/

---

## 📦 Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

---

⭐ If you like this project, feel free to star the repo!
