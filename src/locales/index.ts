import { createI18n, useI18n } from 'vue-i18n'
import { getLanguage, setLanguage } from '../utils/cookies.ts'

import elementLocalZhCn from 'element-plus/es/locale/lang/zh-cn'
import elementLocalEn from 'element-plus/es/locale/lang/en'

import zhcn from './zh-cn.ts'
import en from './en.ts'

const messages = {
  en: {
    ...en,
    ...elementLocalEn,
  },
  'zh-cn': {
    ...zhcn,
    ...elementLocalZhCn,
  },
}

/**
 * 获取本地语言，若有设置过则读取，否则返回浏览器语言，若浏览器语言不支持则返回中文
 */
export function getLocal() {
  let language = getLanguage()
  if (language) return language
  const browserLanguage = navigator.language.toLowerCase()
  language = Object.keys(messages).find(item => item === browserLanguage)
  if (language) return language
  return 'zh-cn'
}

/**
 * 设置本地语言
 * @param language
 */
export function setLocal(language: 'zh-cn' | 'en') {
  const i18n = useI18n()
  i18n.locale.value = language
  setLanguage(language)
}

export default createI18n({
  legacy: false,
  locale: getLocal(),
  messages: messages,
})
