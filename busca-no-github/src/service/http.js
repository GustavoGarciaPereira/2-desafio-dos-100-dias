import axios from 'axios'


export const http = axios.create({
    //https://api.github.com/users/GustavoGarciaPereira
    baseURL: 'https://api.github.com/'
})