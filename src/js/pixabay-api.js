import axios from 'axios';

const API_KEY = "55026716-4dbe0fcfc8dcb0cc6e29137c8";
const BASE_URL = "https://pixabay.com/api/";

 export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        lang: 'ru',
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        page: page,
      }
    });

      return response.data;
      
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
