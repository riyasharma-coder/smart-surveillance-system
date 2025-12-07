import React, { useEffect, useState } from 'react';
import { fetchCameras, fetchEvents } from '../services/api';

function Dashboard() {
  const [cameras, setCameras] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchCameras().then(setCameras);
    fetchEvents().then(setEvents);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Dashboard Overview</h2>

      <div style={styles.grid}>
        {/* CAMERAS */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Active Cameras</h3>
          <ul>
            {cameras.map(cam => (
              <li key={cam.id} style={styles.listItem}>
                {cam.name} — {cam.status}
              </li>
            ))}
          </ul>
        </div>

        {/* EVENTS */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Recent Events</h3>
          <ul>
            {events.map(ev => (
              <li key={ev.id} style={styles.listItem}>
                {ev.time}: {ev.type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", background: "#121212", color: "#fff", height: "100vh" },
  title: { fontSize: "24px", fontWeight: "bold", marginBottom: "20px" },
  grid: { display: "flex", gap: "20px" },
  card: {
    background: "#1E1E1E",
    padding: "20px",
    borderRadius: "12px",
    width: "45%",
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
  },
  cardTitle: { fontSize: "20px", marginBottom: "10px" },
  listItem: { padding: "6px 0", borderBottom: "1px solid #333" },
};

export default Dashboard;
