import axios from "axios";

const BASE_URL = window.location.origin + "/api"

const client = axios.create({
    baseURL: BASE_URL,
})

export {
    client
}