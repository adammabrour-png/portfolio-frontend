import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const getProjects = () => api.get("/projects");
export const getProject = (slug) => api.get(`/projects/${slug}`);

export default api;