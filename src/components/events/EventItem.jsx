import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { athletes } from '../../data/mockData'
import { LazyImage } from '../ui/LazyImage'

export function EventItem({ event }) {
  const { date, title, location, price, description, competingAthleteIds, buyUrl } = event
  const competing = competingAthleteIds
    ? athletes.filter((a) => competingAthleteIds.includes(a.id))
    : []

  const d = new Date(date)
  const day = d.getDate()
  const month = d.toLocaleDateString('pt-BR', { month: 'short' })
  const year = d.getFullYear()

  return (
    <article className="rounded-xl border border-charcoal-600 bg-charcoal-800/50 overflow-hidden">
      <Disclosure as="div">
        {({ open }) => (
          <>
            <DisclosureButton className="w-full flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-6 text-left hover:bg-charcoal-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset rounded-xl">
              <div className="flex items-center gap-4 shrink-0">
                <div className="rounded-lg bg-charcoal-700 px-4 py-2 text-center min-w-[80px]">
                  <span className="block text-lg font-display font-bold text-accent">{day}</span>
                  <span className="text-xs text-gray-400 uppercase">{month} {year}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm text-gray-400">{location}</p>
                </div>
              </div>
              <div className="flex-1 flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="text-sm font-medium text-accent">{price}</span>
                {competing.length > 0 && (
                  <div className="flex -space-x-2">
                    {competing.slice(0, 4).map((a) => (
                      <div
                        key={a.id}
                        className="w-8 h-8 rounded-full border-2 border-charcoal-800 overflow-hidden bg-charcoal-700"
                        title={a.name}
                      >
                        <LazyImage src={a.thumb} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <span
                className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-charcoal-700 transition-transform ${open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </DisclosureButton>
            <DisclosurePanel className="overflow-hidden border-t border-charcoal-600/50">
              <div className="px-4 sm:px-6 pb-6 pt-2">
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
                {competing.length > 0 && (
                  <p className="text-sm text-gray-400 mt-3">
                    Atletas: {competing.map((a) => a.name).join(', ')}
                  </p>
                )}
                <a
                  href={buyUrl}
                  className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium bg-accent text-charcoal-950 hover:bg-accent-light transition-colors"
                >
                  Comprar ingressos
                </a>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </article>
  )
}
