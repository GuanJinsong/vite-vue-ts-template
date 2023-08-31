/// <reference types="vite/client" />

interface ViteEnv {
  VITE_BASE: string
  VITE_PORT: string
  VITE_PUBLIC_PATH: string
}

interface ImportMetaEnv extends ViteEnv {}
