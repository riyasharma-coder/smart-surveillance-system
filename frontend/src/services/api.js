import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000'; // Your backend URL

export const fetchCameras = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/cameras`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cameras:", error);
    return [];
  }
};

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
