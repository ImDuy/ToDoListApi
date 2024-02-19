import axios from "axios"
export const fetchApi = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return axios.get(url).then(res => res.data)
}