import axios from "axios";

const api = axios.create({
  baseURL: "YOUR_HEROKU_URL/SEU_URL_DA_HEROKU",
});

export default api;