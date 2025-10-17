"use client"

import { useEffect, useRef } from "react"

const SCRIPT_ID = "mailerlite-universal-script"
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

const ensureMailerLite = () => {
  if (typeof window === "undefined") {
    return undefined
  }

  if (!window.ml) {
    const queue: MailerLiteGlobal = function (...args: [string, ...string[]]) {
      ;(queue.q = queue.q || []).push(args)
    } as MailerLiteGlobal
    queue.q = []
    window.ml = queue
  }

  return window.ml
}

export function NewsletterEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    ensureMailerLite()

    const loadForm = () => {
      if (!window.ml) {
        return false
      }

      window.ml("account", MAILERLITE_ACCOUNT_ID)
      window.ml("forms", "load", MAILERLITE_FORM_ID)

      return containerRef.current ? containerRef.current.childElementCount > 0 : false
    }

    const handleMlReady = () => {
      const loaded = loadForm()
      if (loaded) {
        window.removeEventListener("mlWebformsLoaded", handleMlReady)
      }
    }
    const handlePageShow = () => {
      loadForm()
    }
    const handleFocus = () => {
      loadForm()
    }

    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        loadForm()
      } else {
        existingScript.addEventListener(
          "load",
          () => {
            existingScript.dataset.loaded = "true"
            loadForm()
          },
          { once: true },
        )
      }
    } else {
      const script = document.createElement("script")
      script.id = SCRIPT_ID
      script.src = "https://assets.mailerlite.com/js/universal.js"
      script.async = true
      script.dataset.loaded = "false"
      script.addEventListener(
        "load",
        () => {
          script.dataset.loaded = "true"
          loadForm()
        },
        { once: true },
      )
      const firstScript = document.getElementsByTagName("script")[0]
      firstScript?.parentNode?.insertBefore(script, firstScript)
    }

    const pollTimer = setInterval(() => {
      if (loadForm()) {
        clearInterval(pollTimer)
      }
    }, 1000)

    window.addEventListener("mlWebformsLoaded", handleMlReady)
    window.addEventListener("pageshow", handlePageShow)
    window.addEventListener("focus", handleFocus)

    return () => {
      window.removeEventListener("mlWebformsLoaded", handleMlReady)
      window.removeEventListener("pageshow", handlePageShow)
      window.removeEventListener("focus", handleFocus)
      clearInterval(pollTimer)
    }
  }, [])

  return <div ref={containerRef} className="ml-embedded" data-form={MAILERLITE_FORM_ID} />
}
