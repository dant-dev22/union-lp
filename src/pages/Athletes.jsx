import { useState } from 'react'
import { motion } from 'framer-motion'
import { DocumentHead } from '../components/seo/DocumentHead'
import { useSEO } from '../hooks/useSEO'
import { athletes } from '../data/mockData'
import { AthleteCard } from '../components/athletes/AthleteCard'
import { AthleteModal } from '../components/athletes/AthleteModal'

export default function Athletes() {
  const [selectedAthlete, setSelectedAthlete] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const seo = useSEO({
    title: 'Atletas',
    description: 'Conheça os atletas da equipe Union BJJ & MMA - Brazilian Jiu Jitsu e MMA.',
  })

  const openModal = (athlete) => {
    setSelectedAthlete(athlete)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedAthlete(null)
  }

  return (
    <>
      <DocumentHead {...seo} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <motion.h1
            className="font-display text-4xl sm:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Atletas
          </motion.h1>
          <motion.p
            className="mt-2 text-gray-400 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Conheça nossa equipe de atletas de BJJ e MMA.
          </motion.p>
        </header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.06 } },
            hidden: {},
          }}
        >
          {athletes.map((athlete) => (
            <AthleteCard
              key={athlete.id}
              athlete={athlete}
              onClick={() => openModal(athlete)}
            />
          ))}
        </motion.div>
      </div>

      <AthleteModal
        athlete={selectedAthlete}
        open={modalOpen}
        onClose={closeModal}
      />
    </>
  )
}
