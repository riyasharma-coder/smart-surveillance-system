import React, { useEffect, useState, useRef } from 'react';
import { subscribeToAlerts } from '../services/websocket';

function LiveView() {
  const [alerts, setAlerts] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    subscribeToAlerts((alert) => {
      setAlerts((prev) => [alert, ...prev]);
    });
  }, []);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [alerts]);

  const getColor = (type) => {
    if (type.includes("Gun")) return "#FF4C4C";        // red
    if (type.includes("Motion")) return "#4C8DFF";     // blue
    if (type.includes("Tamper")) return "#FF8A3D";     // orange
    if (type.includes("Loitering")) return "#7D4CFF";  // purple
    return "#333";                                     // default
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Live Alerts</h2>

      <div style={styles.alertBox} ref={listRef}>
        {alerts.map((alert) => (
          <div
            key={alert.id}
            style={{
              ...styles.alertCard,
              borderLeft: `6px solid ${getColor(alert.message)}`,
            }}
          >
            <p style={styles.time}>{alert.time}</p>
            <p style={styles.message}>{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", color: "#fff", background: "#121212", height: "100vh" },
  title: { fontSize: "24px", fontWeight: "bold", marginBottom: "15px" },
  alertBox: {
    height: "80vh",
    overflowY: "auto",
    paddingRight: "10px",
  },
  alertCard: {
    background: "#1E1E1E",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
  },
  time: { fontSize: "12px", opacity: 0.6 },
  message: { fontSize: "18px", fontWeight: "600", marginTop: "5px" },
};

export default LiveView;
