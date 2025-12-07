import React from "react";

function CameraCard({ cameraName, status }) {
  return (
    <div className="camera-card">
      <h3>{cameraName}</h3>
      <p>Status: {status}</p>
    </div>
  );
}

export default CameraCard;
