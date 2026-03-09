import { motion } from 'framer-motion'
import { LazyImage } from '../ui/LazyImage'

export function AthleteCard({ athlete, onClick }) {
  const { name, nickname, weightClass, record, thumb } = athlete
  const rec = `${record.wins}-${record.losses}${record.draws > 0 ? `-${record.draws}` : ''}`

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-xl overflow-hidden bg-charcoal-800 border border-charcoal-600 hover:border-charcoal-500 transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-charcoal-950"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Ver perfil de ${name}`}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <LazyImage
          src={thumb}
          alt={name}
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-lg font-semibold text-white">
            {nickname ? `"${nickname}" ` : ''}{name}
          </h3>
          <p className="text-sm text-gray-400">{weightClass}</p>
          <p className="text-sm font-medium text-accent mt-1">Record: {rec}</p>
        </div>
      </div>
    </motion.article>
  )
}
