import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { DocumentHead } from '../components/seo/DocumentHead'
import { useSEO } from '../hooks/useSEO'
import { siteMeta } from '../data/mockData'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  name: siteMeta.name,
  description: siteMeta.description,
  url: siteMeta.baseUrl,
}

export default function Home() {
  const seo = useSEO({
    title: 'Union BJJ & MMA Team',
    description: 'Equipe de Brazilian Jiu Jitsu e MMA. Conheça nossos atletas, eventos e rankings.',
  })

  return (
    <>
      <DocumentHead {...seo} structuredData={structuredData} />
      <section
        className="relative min-h-[100vh] flex flex-col items-center justify-between px-4 overflow-hidden"
        aria-labelledby="hero-title"
      >
        {/* Subtle animated background */}
        <div className="absolute inset-0 bg-charcoal-950" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 50%, rgba(219, 118, 15, 0.15), transparent)`,
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'linear-gradient(45deg, #DB760F 25%, transparent 25%, transparent 75%, #DB760F 75%)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex-1 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1
              id="hero-title"
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
            >
              UNION <span className="text-accent">BJJ &amp; MMA</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-md mx-auto">
              Brazilian Jiu Jitsu & MMA
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/athletes"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-accent text-charcoal-950 hover:bg-accent-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-950"
              >
                Ver Atletas
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-charcoal-600 text-gray-200 hover:bg-charcoal-800 hover:border-charcoal-500 transition-colors"
              >
                Próximos Eventos
              </Link>
            </div>
          </motion.div>
        </div>

        <footer className="relative z-10 w-full border-t border-charcoal-700/50 bg-charcoal-950/90 backdrop-blur-md">
          <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-xs text-gray-400">
            <span className="font-display font-semibold tracking-tight text-white">
              UNION <span className="text-accent">BJJ &amp; MMA</span>
            </span>
            <span>
              Feito por{' '}
              <a
                href="https://rais-labs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                rais labs
              </a>
            </span>
          </div>
        </footer>
      </section>
    </>
  )
}
