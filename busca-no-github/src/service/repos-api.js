import {http} from './http'

//user = 'GustavoGarciaPereira'

export const fetchRepos = user => http.get(`users/${user}/repos`)