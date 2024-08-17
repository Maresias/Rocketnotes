import axios from "axios";

export const api = axios.create({
    baseURL: "https://notepad-api-09eg.onrender.com"
})
