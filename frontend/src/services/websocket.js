import { io } from "socket.io-client";

const SOCKET_URL = "http://127.0.0.1:5000"; // Backend URL
export const socket = io(SOCKET_URL);

export const subscribeToAlerts = (callback) => {
  socket.on("new_alert", (alert) => {
    callback(alert);
  });
};

