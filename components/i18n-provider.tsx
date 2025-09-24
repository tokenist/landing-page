"use client"

import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"
import { useEffect, useState } from "react"
import { activateLocale, defaultLocale, locales } from "@/lib/i18n"

export default function LinguiProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [locale, setLocale] = useState(defaultLocale)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get locale from localStorage or use default
    const savedLocale = localStorage.getItem("locale")
    const browserLocale = navigator.language.split("-")[0]
    const initialLocale = savedLocale || (Object.keys(locales).includes(browserLocale) ? browserLocale : defaultLocale)
    
    activateLocale(initialLocale).then(() => {
      setLocale(initialLocale)
      setIsLoading(false)
    })
  }, [])

  // Handle locale changes
  useEffect(() => {
    const handleLocaleChange = (event: CustomEvent) => {
      const newLocale = event.detail.locale
      activateLocale(newLocale).then(() => {
        setLocale(newLocale)
        localStorage.setItem("locale", newLocale)
      })
    }

    window.addEventListener("localeChange", handleLocaleChange as EventListener)
    return () => {
      window.removeEventListener("localeChange", handleLocaleChange as EventListener)
    }
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <I18nProvider i18n={i18n}>
      {children}
    </I18nProvider>
  )
}