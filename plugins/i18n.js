export default function ({ app }) {
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, context) => {
    const obj = app.i18n.locales.filter(function (el) {
      return el.code === newLocale
    })
    app.vuetify.framework.rtl = obj[0].dir === 'rtl'
    document.getElementsByTagName('html')[0].lang = obj[0].lang
    document.dir = obj[0].dir
  }
}
