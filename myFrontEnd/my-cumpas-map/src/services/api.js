import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your backend URL
});

export const getDirections = async (start, destination) => {
  try {
    const response = await api.get(`/directions?start=${start}&destination=${destination}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching directions', error);
    return null;
  }
};

export const getNearbyPlaces = async (location) => {
  try {
    const response = await api.get(`/nearby-places?lat=${location.latitude}&lon=${location.longitude}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching nearby places', error);
    return [];
  }
};
