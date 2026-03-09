import { motion } from 'framer-motion'
import { DocumentHead } from '../components/seo/DocumentHead'
import { useSEO } from '../hooks/useSEO'
import { events } from '../data/mockData'
import { EventItem } from '../components/events/EventItem'

const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date))

export default function Events() {
  const seo = useSEO({
    title: 'Eventos',
    description: 'Próximos eventos de BJJ e MMA da equipe Union BJJ & MMA. Compre ingressos e acompanhe as lutas.',
  })

  return (
    <>
      <DocumentHead {...seo} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <motion.h1
            className="font-display text-4xl sm:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Eventos
          </motion.h1>
          <motion.p
            className="mt-2 text-gray-400"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Próximos eventos com participação da equipe Union BJJ & MMA.
          </motion.p>
        </header>

        <ul className="space-y-4">
          {sortedEvents.map((event, i) => (
            <motion.li
              key={event.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <EventItem event={event} />
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  )
}
