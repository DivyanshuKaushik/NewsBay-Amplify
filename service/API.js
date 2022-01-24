import axios from 'axios'

const API = axios.create({
    baseURL: 'https://d7unnt51ud.execute-api.ap-south-1.amazonaws.com/dev/api/v2',
});

export default API 