import axios from 'axios';

const API_KEY = "55026716-4dbe0fcfc8dcb0cc6e29137c8";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page = 1, per_page = 15) {
    if (per_page < 15) {
    per_page = 15;
  }
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        page,
        per_page,     
        safesearch: true,   
        lang: "ru",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}