from flask import Flask, jsonify
from flask_socketio import SocketIO, emit
import random
import threading
import time

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

# Dummy data for cameras and events
cameras = [
    {"id": 1, "name": "Camera 1", "status": "Online"},
    {"id": 2, "name": "Camera 2", "status": "Offline"},
    {"id": 3, "name": "Camera 3", "status": "Online"}
]

events = [
    {"id": 1, "type": "Motion Detected", "time": "2025-12-06 09:00"},
    {"id": 2, "type": "Unauthorized Access", "time": "2025-12-06 09:10"}
]

@app.route('/')
def home():
    return "Smart Surveillance Backend is running!"

@app.route('/api/cameras')
def get_cameras():
    return jsonify(cameras)

@app.route('/api/events')
def get_events():
    return jsonify(events)

# WebSocket for live alerts
@socketio.on('connect')
def ws_connect():
    print("Client connected")

@socketio.on('disconnect')
def ws_disconnect():
    print("Client disconnected")

# Function to send random alerts every 5 seconds
def send_random_alerts():
    alert_types = ["Motion Detected", "Tamper Alert", "Gun Detected", "Loitering"]
    while True:
        time.sleep(5)
        alert = {
            "id": random.randint(100, 999),
            "message": random.choice(alert_types),
            "time": time.strftime("%Y-%m-%d %H:%M:%S")
        }
        socketio.emit('new_alert', alert)
        print("Sent alert:", alert)

# Start alert thread
threading.Thread(target=send_random_alerts, daemon=True).start()

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)

