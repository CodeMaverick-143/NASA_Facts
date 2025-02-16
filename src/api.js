// src/api.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov';

export const fetchAPOD = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch APOD data');
  }
};

// Example: Fetch Mars Rover Photos by Earth date (you can extend this as needed)
export const fetchMarsRoverPhotos = async (date = '2015-06-03') => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`
    );
    return response.data.photos;
  } catch (error) {
    throw new Error('Failed to fetch Mars Rover photos');
  }
};
