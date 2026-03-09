import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { DocumentHead } from '../components/seo/DocumentHead'
import { useSEO } from '../hooks/useSEO'
import { athletes } from '../data/mockData'
import { LazyImage } from '../components/ui/LazyImage'

export default function AthleteDetail() {
  const { slug } = useParams()
  const athlete = athletes.find((a) => a.slug === slug)

  const seo = useSEO({
    title: athlete ? `${athlete.name} | Atleta` : 'Atleta',
    description: athlete ? athlete.bio : undefined,
    image: athlete?.image,
    type: 'profile',
  })

  if (!athlete) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-display text-white">Atleta não encontrado</h1>
        <Link to="/athletes" className="mt-4 inline-block text-accent hover:underline">Voltar aos atletas</Link>
      </div>
    )
  }

  const { name, nickname, weightClass, teamRank, record, image, bio, stats, fightHistory, titles, highlights } = athlete
  const rec = `${record.wins}-${record.losses}${record.draws > 0 ? `-${record.draws}` : ''}`

  return (
    <>
      <DocumentHead {...seo} />
      <article>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[320px] overflow-hidden">
          <LazyImage src={image} alt={name} className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                {nickname ? `"${nickname}" ` : ''}{name}
              </h1>
              <p className="mt-2 text-accent font-medium">{weightClass}</p>
              <p className="text-gray-300">{teamRank} • {rec}</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Bio */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="font-display text-2xl font-semibold text-white mb-4">Biografia</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl">{bio}</p>
          </motion.section>

          {/* Stats */}
          {stats && (
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <h2 className="font-display text-2xl font-semibold text-white mb-4">Estatísticas</h2>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-xl bg-charcoal-800 border border-charcoal-600 px-6 py-4 min-w-[120px]">
                  <p className="text-2xl font-display font-bold text-accent">{record.wins}</p>
                  <p className="text-sm text-gray-400">Vitórias</p>
                </div>
                <div className="rounded-xl bg-charcoal-800 border border-charcoal-600 px-6 py-4 min-w-[120px]">
                  <p className="text-2xl font-display font-bold text-red-400">{record.losses}</p>
                  <p className="text-sm text-gray-400">Derrotas</p>
                </div>
                {stats.submissions != null && (
                  <div className="rounded-xl bg-charcoal-800 border border-charcoal-600 px-6 py-4 min-w-[120px]">
                    <p className="text-2xl font-display font-bold text-white">{stats.submissions}</p>
                    <p className="text-sm text-gray-400">Finalizações</p>
                  </div>
                )}
                {stats.ko != null && (
                  <div className="rounded-xl bg-charcoal-800 border border-charcoal-600 px-6 py-4 min-w-[120px]">
                    <p className="text-2xl font-display font-bold text-white">{stats.ko}</p>
                    <p className="text-sm text-gray-400">KOs</p>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {/* Fight history */}
          {fightHistory?.length > 0 && (
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-semibold text-white mb-4">Histórico de lutas</h2>
              <ul className="space-y-3 max-w-2xl">
                {fightHistory.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-charcoal-800 border border-charcoal-600 px-4 py-3"
                  >
                    <span className="text-gray-300">{f.date} vs {f.opponent}</span>
                    <span className={`font-medium ${f.result === 'W' ? 'text-accent' : 'text-red-400'}`}>
                      {f.result} ({f.method})
                    </span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Titles */}
          {titles?.length > 0 && (
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <h2 className="font-display text-2xl font-semibold text-white mb-4">Títulos</h2>
              <ul className="flex flex-wrap gap-2">
                {titles.map((t, i) => (
                  <li
                    key={i}
                    className="rounded-lg bg-charcoal-800 border border-accent/30 px-4 py-2 text-accent font-medium"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Video carousel / highlights */}
          {highlights?.length > 0 && (
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-semibold text-white mb-4">Destaques</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((url, i) => (
                  <div key={i} className="aspect-video rounded-xl overflow-hidden bg-charcoal-800">
                    <iframe
                      src={url}
                      title={`Highlight ${i + 1}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          <Link
            to="/athletes"
            className="inline-flex items-center text-accent hover:underline"
          >
            ← Voltar aos atletas
          </Link>
        </div>
      </article>
    </>
  )
}
