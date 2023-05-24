import axios from 'axios'

const GreenAPIInstance = axios.create({
    baseURL: 'https://api.green-api.com/',
    headers: {
        "Content-Type": "application/json"
    }
})

export default GreenAPIInstance