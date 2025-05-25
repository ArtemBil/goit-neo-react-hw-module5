import axios from 'axios';

const fetchTmbdData = async (url) => {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default fetchTmbdData;