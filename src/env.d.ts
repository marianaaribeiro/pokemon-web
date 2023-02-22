/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_KEY: string
  readonly VITE_IMAGES_DOMAIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}