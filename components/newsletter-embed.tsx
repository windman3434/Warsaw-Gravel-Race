"use client"

import { useEffect } from "react"

const MAILERLITE_ACCOUNT_ID = "1359190"
const MAILERLITE_FORM_ID = "Qnpcou"

type MailerLiteGlobal = {
  (type: string, ...args: string[]): void
  q?: Array<[string, ...string[]]>
}

declare global {
  interface Window {
    ml?: MailerLiteGlobal
  }
}

export function NewsletterEmbed() {
  useEffect(() => {
    let pollTimer: ReturnType<typeof setInterval> | undefined

    const loadForm = () => {
      if (!window.ml) {
        return false
      }

      window.ml("account", MAILERLITE_ACCOUNT_ID)
      window.ml("forms", "load", MAILERLITE_FORM_ID)
      return true
    }

    const handleMlReady = () => {
      if (loadForm()) {
        window.removeEventListener("mlWebformsLoaded", handleMlReady)
        if (pollTimer) {
          clearInterval(pollTimer)
        }
      }
    }

    if (!loadForm()) {
      window.addEventListener("mlWebformsLoaded", handleMlReady)

      pollTimer = setInterval(() => {
        if (loadForm() && pollTimer) {
          clearInterval(pollTimer)
          pollTimer = undefined
          window.removeEventListener("mlWebformsLoaded", handleMlReady)
        }
      }, 400)
    }

    return () => {
      if (pollTimer) {
        clearInterval(pollTimer)
      }
      window.removeEventListener("mlWebformsLoaded", handleMlReady)
    }
  }, [])

  return <div className="ml-embedded" data-form={MAILERLITE_FORM_ID} />
}
