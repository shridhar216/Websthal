import axios from "axios";

// Centralised axios instance for backend calls
const api = axios.create({
  baseURL: "http://localhost:8080/api", // adjust the base URL to match your Spring Boot server
  timeout: 10000, // 10 seconds timeout
});

export default api;