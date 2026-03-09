import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/athletes', label: 'Atletas' },
  { to: '/events', label: 'Eventos' },
  { to: '/rankings', label: 'Rankings' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-charcoal-950/90 backdrop-blur-md border-b border-charcoal-700/50' : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-18" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Union BJJ & MMA - Página inicial">
            <span className="font-display text-xl font-bold tracking-tight text-white">
              UNION <span className="text-accent">BJJ &amp; MMA</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === to ? 'text-accent' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-charcoal-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile menu (Headless UI Dialog) */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-50 md:hidden">
        <div className="fixed inset-0 bg-charcoal-950/95 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-start justify-center pt-20 px-4">
          <DialogPanel
            id="mobile-menu"
            className="w-full max-w-sm rounded-xl bg-charcoal-800 border border-charcoal-600 p-6 transition duration-200 ease-out"
          >
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block py-3 text-base font-medium rounded-lg px-3 ${
                      location.pathname === to
                        ? 'text-accent bg-charcoal-700/50'
                        : 'text-gray-200 hover:bg-charcoal-700/30'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-4 w-full py-2 text-sm text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              Fechar
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
