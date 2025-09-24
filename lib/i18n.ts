import { i18n } from "@lingui/core"

export const locales = {
  en: "English",
  vi: "Tiếng Việt",
}

export const defaultLocale = "en"

export async function activateLocale(locale: string) {
  try {
    const { messages } = await import(`../src/locales/${locale}/messages.mjs`)
    i18n.load(locale, messages)
    i18n.activate(locale)
  } catch (error) {
    console.warn(`Failed to load locale ${locale}, falling back to ${defaultLocale}`)
    if (locale !== defaultLocale) {
      const { messages } = await import(`../src/locales/${defaultLocale}/messages.mjs`)
      i18n.load(defaultLocale, messages)
      i18n.activate(defaultLocale)
    }
  }
}