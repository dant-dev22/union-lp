import { motion } from 'framer-motion'
import { DocumentHead } from '../components/seo/DocumentHead'
import { useSEO } from '../hooks/useSEO'
import { rankingsByDivision, athletes } from '../data/mockData'
import { LazyImage } from '../components/ui/LazyImage'

function getAthlete(id) {
  return athletes.find((a) => a.id === id)
}

export default function Rankings() {
  const seo = useSEO({
    title: 'Rankings',
    description: 'Rankings oficiais da equipe Union BJJ & MMA por divisão de peso, faixa e categoria.',
  })

  return (
    <>
      <DocumentHead {...seo} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <motion.h1
            className="font-display text-4xl sm:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Rankings
          </motion.h1>
          <motion.p
            className="mt-2 text-gray-400"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Ranking por divisão de peso, faixa (BJJ) e categoria profissional/amador.
          </motion.p>
        </header>

        <div className="space-y-10">
          {rankingsByDivision.map((division, divIndex) => {
            const typeLabel =
              division.type === 'bjj'
                ? 'BJJ'
                : division.type === 'professional'
                ? 'Profissional'
                : 'Amador'
            return (
              <motion.section
                key={division.division}
                className="rounded-xl border border-charcoal-600 bg-charcoal-800/50 overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: divIndex * 0.06 }}
              >
                <div className="px-4 sm:px-6 py-3 border-b border-charcoal-600 bg-charcoal-900/50">
                  <h2 className="font-display text-lg font-semibold text-white">
                    {division.division}
                    {division.belt && (
                      <span className="ml-2 text-sm font-normal text-accent">Faixa {division.belt}</span>
                    )}
                  </h2>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{typeLabel}</p>
                </div>
                <ul className="divide-y divide-charcoal-600">
                  {division.athletes.map((entry, i) => {
                    const athlete = getAthlete(entry.athleteId)
                    if (!athlete) return null
                    return (
                      <li
                        key={entry.athleteId}
                        className="flex items-center gap-4 px-4 sm:px-6 py-3 hover:bg-charcoal-800/80 transition-colors"
                      >
                        <span
                          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg font-display font-bold text-sm ${
                            entry.position === 1
                              ? 'bg-accent text-charcoal-950'
                              : 'bg-charcoal-700 text-gray-300'
                          }`}
                        >
                          {entry.position}
                        </span>
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-charcoal-700 flex-shrink-0">
                          <LazyImage src={athlete.thumb} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-white truncate">{athlete.name}</p>
                          <p className="text-sm text-gray-400">{entry.record}</p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <p className="font-display font-bold text-accent">{entry.points}</p>
                          <p className="text-xs text-gray-400">pts</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </motion.section>
            )
          })}
        </div>
      </div>
    </>
  )
}
