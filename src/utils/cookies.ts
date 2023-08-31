import cookie from 'js-cookie'
import cookieKeys from '../types/constant/cookieKeys.ts'

export const getLanguage = () => cookie.get(cookieKeys.language)
export const setLanguage = (value: string) => cookie.set(cookieKeys.language, value)

export const getToken = () => cookie.get(cookieKeys.token)
