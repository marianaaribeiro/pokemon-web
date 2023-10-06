import axios, { AxiosError, AxiosRequestConfig } from 'axios'
const API_URL = 'https://pokeapi.co/api/v2'

export const api = axios.create({
  baseURL: API_URL,
})

api.interceptors.request.use(
  async (response: AxiosRequestConfig) => {
    return response
  },
  (error: AxiosError) => {
    console.error(`Interceptors API Request -> ${error}`)
  }
)
