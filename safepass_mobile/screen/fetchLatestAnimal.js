// fetchLatestAnimal.js
import axios from "axios";

const fetchLatestAnimal = async () => {
  try {
    const response = await axios.get(
      "http://192.168.8.223:8000/api/yolo/latest"
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching latest animal:", error);
    throw error;
  }
};

export default fetchLatestAnimal;
