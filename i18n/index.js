var en = require('./locales/en.json')
var zh = require('./locales/zh.json')

const i18n = {
  translations: {
    en,
    zh,
  },
  defaultLang: 'zh',
  useBrowserDefault: true,
}

module.exports = i18n
