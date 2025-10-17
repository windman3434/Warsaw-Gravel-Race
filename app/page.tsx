import { Instagram, Facebook } from "lucide-react"
import Logo from "@/components/logo"
import { NewsletterEmbed } from "@/components/newsletter-embed"



export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between snap-start snap-always">
        {/* Background Image - Mobile */}
        <div
          className="absolute inset-0 bg-cover bg-left md:hidden"
          style={{
            backgroundImage: "url(/images/background-mobile.jpg)",
          }}
          role="img"
          aria-label="Cyclists riding on a gravel road through countryside"
        >
          <div className="absolute inset-0 bg-brand-overlay" />
        </div>

        {/* Background Image - Desktop */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed hidden md:block"
          style={{
            backgroundImage: "url(/images/background-desktop.jpg)",
          }}
          role="img"
          aria-label="Cyclists riding on a gravel road through countryside"
        >
          <div className="absolute inset-0 bg-brand-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 pt-36">
          {/* Logo */}
          <div className="w-full h-40 sm:h-56 md:h-72 lg:h-96 mb-16 md:mb-8 lg:mb-10">
            <Logo className="w-full h-full block" />
          </div>
        </div>

        {/* Headline */}
        <div className="relative z-10 text-center px-4 pb-36">
          <h1 className="text-white text-4xl font-bold leading-tight max-w-4xl mx-auto md:text-7xl">
            Where city people
            <br />
            meet gravel
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-brand-primary min-h-screen flex items-center justify-center px-4 snap-start snap-always">
        <div className="w-full text-center">
          <h2 className="text-brand-accent text-4xl font-bold leading-tight md:text-8xl px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
            The series of 4 marvellous gravel races just next to Warsaw.
          </h2>
        </div>
      </section>

      {/* Date Section */}
      <section className="bg-brand-accent min-h-screen flex items-center justify-center px-4 snap-start snap-always">
        <div className="w-full text-center">
          <h2 className="text-brand-primary text-6xl font-bold md:text-9xl">Starting Spring 2026</h2>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-brand-light min-h-screen flex items-center justify-center px-4 snap-start snap-always">
        <div className="w-full max-w-3xl flex flex-col items-center gap-12 text-center">
          <div className="flex justify-center items-center gap-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-brand-primary hover:opacity-80 transition-opacity"
            >
              <Instagram size={64} strokeWidth={1.5} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="text-brand-primary hover:opacity-80 transition-opacity"
            >
              <Facebook size={64} strokeWidth={1.5} className="fill-brand-primary" />
            </a>
          </div>
          <div className="w-full rounded-2xl border border-brand-primary bg-white/80 p-8 shadow-lg backdrop-blur">
            <h2 className="text-brand-primary text-3xl font-bold md:text-4xl">Stay in the loop</h2>
            <p className="mt-3 text-brand-primary opacity-80 md:text-lg">
              Subscribe for race announcements, route previews, and community rides.
            </p>
            <div className="mt-6 w-full">
              <NewsletterEmbed />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
