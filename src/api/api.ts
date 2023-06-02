import axios from "axios"

export const api = axios.create({
    baseURL: "https://tech-api-5s7z.onrender.com",
    timeout: 10000
})