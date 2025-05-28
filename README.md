# MediRemind
# MediRemind

MediRemind is an AI-powered follow-up reminder system designed for clinics and private doctors. It helps track patient appointments and automatically sends reminders via WhatsApp or SMS using Twilio. The goal is to reduce missed follow-ups and improve patient care using a simple, mobile-friendly tool.

## 🚀 Features

- 📅 Add and manage doctor and patient appointments
- 🔔 Send WhatsApp/SMS reminders using Twilio
- 🌐 Supabase backend for data storage and authentication
- 💡 Built with AI-enhanced tools for rapid prototyping and smart automation
- 🧠 Prompt-generated messaging (Claude/MGX)
- 📱 Mobile-ready interface (via Rork.App or Lovable.dev)

---

## 🧠 Tech Stack

| Tool            | Purpose                         |
|-----------------|----------------------------------|
| Supabase        | Auth, database, API              |
| Twilio          | Messaging via WhatsApp/SMS       |
| Rork.App        | Mobile app generation            |
| Lovable.dev     | Web UI generation                |
| Cursor AI       | Code improvement & refactoring   |
| Claude.ai       | Prompt generation for reminders  |

---
#Project Structure 
MediRemind/
│
├── 📄 index.js               # Main entry point for the backend (Node.js server)
├── 📄 .env                   # Environment variables (Twilio + Supabase credentials)
├── 📄 package.json           # Project metadata and dependencies
├── 📄 README.md              # Project documentation
├── 📄 .gitignore             # Files to ignore when pushing to GitHub
│
├── 📁 public/                # Static files served to the frontend
│   ├── 📄 index.html         # Simple UI for appointment input
│   ├── 📄 style.css          # Optional CSS file for UI styling
│   └── 📄 script.js          # JavaScript to interact with backend
│
├── 📁 utils/                 # Utility functions
│   └── 📄 sendSMS.js         # Function to send SMS via Twilio
│
└── 📁 supabase/              # Supabase SQL and DB helpers
    └── 📄 schema.sql         # SQL file for creating necessary tables



