import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const API_URL = import.meta.env.VITE_API_URL ?? '${VITE_API_URL}'

export const api = axios.create({
  baseURL: API_URL,
  timeout: 90000,
})

api.interceptors.request.use(
  async (response: AxiosRequestConfig) => {
    return response
  },
  (error: AxiosError) => {
    console.error(`Interceptors API Request -> ${error}`)
  }
)
