import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',  //  Endereço que se repete em todas as requisições
})