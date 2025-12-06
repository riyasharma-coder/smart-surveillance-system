🚨 Smart Surveillance System
AI-Powered Real-Time Security Monitoring for Homes, Offices, ATMs & High-Security Zones

Multi-Camera • YOLOv8 Detection • DeepSORT Tracking • ANPR • Face Recognition • Audio Alerts • Cloud Backup

⭐ Overview

The Smart Surveillance System is an AI-powered, production-grade security solution built for:

Enterprises

Banks & ATMs

Border Security

Smart Cities

Residential & Commercial Buildings

It uses computer vision + audio intelligence to detect threats in real time and instantly trigger alerts.

🎯 Goal: Provide an end-to-end, multi-camera surveillance platform with real-time monitoring, incident detection, event logging, and analytics — all deployable on a local machine or cloud.

🚀 Key Features (Top 25)
🔥 Real-Time Detection

👤 Person detection

🔫 Weapon detection (gun/knife)

😷 Masked face detection

👤➡️👤 Person tracking with DeepSORT

🧳 Suspicious object / unattended bag detection

🧍‍♂️ Loitering detection

🚫 Perimeter breach (virtual fence)

🔥 Fire & smoke detection

🌙 Night-vision enhancement (low-light filtering)

🛂 Identity & Access

🧑‍💼 Face recognition (authorized / unauthorized users)

🚗 ANPR — Automatic Number Plate Recognition

🚘 Vehicle detection & tracking

🛣 Intruder path mapping (trajectory tracking)

🎧 Audio Intelligence

🔉 Gunshot detection

🪟 Glass-break detection

🛠 ATM drilling / shaking detection

🛡 System Security

🎥 Camera offline detection

🔄 Camera tampering & angle change detection

➕ Multi-camera support (2–16 cameras)

📢 Alerts & Notifications

🔔 Real-time alerts (Email / SMS / WhatsApp)

📼 Event recording (Video + Images + Logs)

☁️ Cloud backup to AWS S3 / GCP

📊 Admin dashboard with analytics, heatmaps, timelines

🏗️ System Architecture
                ┌──────────────────────────┐
                │      Frontend (React)    │
                │  Live View, Dashboard,   │
                │  Events, Analytics       │
                └──────────────┬───────────┘
                               │ REST / WS
                               ▼
                   ┌────────────────────────┐
                   │      Backend (Python)  │
                   │ Flask/FastAPI + CV AI  │
                   └──────────────┬─────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        ▼                         ▼                         ▼
┌────────────────┐      ┌────────────────┐       ┌──────────────────┐
│ Detection Engine│      │ Audio Engine  │       │ Event Recorder    │
│ YOLOv8, FaceRec │      │ Gunshot, Glass│       │ Video, Images     │
└────────────────┘      └────────────────┘       └──────────────────┘

            ┌───────────────────────────────┐
            │    Cloud Backup (S3/GCS)      │
            └───────────────────────────────┘

📂 Project Structure
smart-surveillance-system/
│
├── backend/
│   ├── app.py
│   ├── core/ (auth, db, logging)
│   ├── detection/ (vision modules)
│   ├── audio/ (gunshot, glass break)
│   ├── video/ (cameras, recording)
│   ├── alerts/ (email/sms/whatsapp)
│   ├── api/ (routes)
│   ├── services/ (analytics, cloud)
│   └── tests/
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   └── services/
│
├── models/ (YOLO, ANPR, face encodings)
├── docs/ (architecture diagrams)
└── README.md

🖥️ Frontend (React + Vite)
Includes:

Multi-camera grid dashboard

Live streaming with bounding boxes

Alerts panel

Event gallery (with filters)

Analytics:

Heatmaps

Timeline charts

Intrusion graphs

Admin panel (camera setup, roles)

⚙️ Backend (Python + Flask/FastAPI)
Provides:

✔ REST API
✔ WebSockets for live alerts
✔ Detection pipeline
✔ Event storage
✔ Logging & analytics
✔ Multi-camera management

📦 Installation
Clone the repository
git clone https://github.com/riyasharma-coder/smart-surveillance-system.git
cd smart-surveillance-system

🐍 Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

🌐 Frontend Setup
cd frontend
npm install
npm run dev

🚀 Run with Docker (recommended)
docker-compose up --build

🧪 Testing
cd backend
pytest

📸 Screenshots (Add later)
assets/
 ├── dashboard.png
 ├── live-view.png
 └── detections.png

📊 Analytics Examples

Intrusion heatmap

Loitering timeline

Alert frequency

Camera offline history

Vehicle entries/exits

Path tracking map

🧭 Roadmap / Future Scope

🔹 Drone detection
🔹 Crowd analysis
🔹 Behavior prediction (pose-based)
🔹 Smart city integration
🔹 Mobile app (Flutter)

👩‍💻 Author

Riya Sharma and Aparna Dubey
AI & Full-Stack Developer
🚀 Passionate about Computer Vision, AI Systems & Scalable Backends

⭐ Show Support

If you like this project:

⭐ Star the repo
📌 Follow to see updates
