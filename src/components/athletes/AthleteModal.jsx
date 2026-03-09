import { Link } from 'react-router-dom'
import { Modal } from '../ui/Modal'
import { LazyImage } from '../ui/LazyImage'

const SocialLink = ({ href, label, icon }) => (
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg bg-charcoal-700 text-gray-300 hover:text-accent hover:bg-charcoal-600 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  ) : null
)

export function AthleteModal({ athlete, open, onClose }) {
  if (!athlete) return null

  const { name, nickname, weightClass, teamRank, record, image, bio, instagram, youtube, upcomingFights, slug } = athlete
  const rec = `${record.wins}-${record.losses}${record.draws > 0 ? `-${record.draws}` : ''}`

  return (
    <Modal open={open} onClose={onClose} title={`Perfil: ${name}`}>
      <div className="relative">
        <div className="aspect-[4/3] relative">
          <LazyImage src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="font-display text-2xl font-bold text-white">
              {nickname ? `"${nickname}" ` : ''}{name}
            </h2>
            <p className="text-accent font-medium">{weightClass}</p>
            <p className="text-gray-300 text-sm">{teamRank} • Record: {rec}</p>
          </div>
        </div>
        <div className="p-4 space-y-4">
          {bio && (
            <p className="text-gray-300 text-sm leading-relaxed">{bio}</p>
          )}
          {(instagram || youtube) && (
            <div className="flex gap-2" aria-label="Redes sociais">
              <SocialLink
                href={instagram ? `https://instagram.com/${instagram}` : null}
                label="Instagram"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm0 2.225h-.63c-2.206 0-2.54.014-3.561.06-1.03.046-1.7.2-2.27.42-.57.22-.96.477-1.125.803-.165.326-.22.7-.22 1.28v.63c0 .58.055.954.22 1.28.164.326.555.582 1.125.803.57.22 1.24.374 2.27.42 1.02.046 1.355.06 3.561.06h.63c2.206 0 2.54-.014 3.561-.06 1.03-.046 1.7-.2 2.27-.42.57-.22.96-.477 1.125-.803.165-.326.22-.7.22-1.28v-.63c0-.58-.055-.954-.22-1.28a2.09 2.09 0 00-1.125-.803c-.57-.22-1.24-.374-2.27-.42-1.02-.046-1.355-.06-3.561-.06zM12 7.027a4.973 4.973 0 110 9.946 4.973 4.973 0 010-9.946zM12 9a2.973 2.973 0 100 5.946A2.973 2.973 0 0012 9z" clipRule="evenodd" />
                  </svg>
                }
              />
              <SocialLink
                href={youtube ? `https://youtube.com/@${youtube}` : null}
                label="YouTube"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                }
              />
            </div>
          )}
          {upcomingFights?.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Próximas lutas</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                {upcomingFights.map((f, i) => (
                  <li key={i}>{f.date} — {f.event} {f.opponent !== 'TBD' ? `vs ${f.opponent}` : ''}</li>
                ))}
              </ul>
            </div>
          )}
          <Link
            to={`/athletes/${slug}`}
            className="inline-flex items-center justify-center w-full py-3 rounded-lg font-medium bg-accent text-charcoal-950 hover:bg-accent-light transition-colors"
            onClick={onClose}
          >
            Ver perfil completo
          </Link>
        </div>
      </div>
    </Modal>
  )
}
