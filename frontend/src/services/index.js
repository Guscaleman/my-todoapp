import axios from "axios";

export const api = axios.create({
	baseURL: "https://todo-api-production-7540.up.railway.app/",
	timeout: 5 * 1000,
});
