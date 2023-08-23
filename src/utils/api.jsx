import axios from "axios";

const fetchDatafromApi = async (url) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/" + url);

    return response.data.results;
  } catch (error) {
    return error;
  }
};

export default fetchDatafromApi;
