import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export default class APIHandler {
    constructor() {
        this.instance = axios.create({
            baseURL: url
        });
    }

    get(url) {
        return this.instance.get(url);
    }

    post(url, data) {
        return this.instance.post(url, data);
    }
}