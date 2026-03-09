import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Navbar } from './components/layout/Navbar'
import { DocumentHead } from './components/seo/DocumentHead'

const Home = lazy(() => import('./pages/Home'))
const Athletes = lazy(() => import('./pages/Athletes'))
const AthleteDetail = lazy(() => import('./pages/AthleteDetail'))
const Events = lazy(() => import('./pages/Events'))
const Rankings = lazy(() => import('./pages/Rankings'))

function PageFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" aria-hidden="true" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <DocumentHead />
      <Navbar />
      <main id="main-content" className="pt-16" role="main">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/athletes" element={<Athletes />} />
            <Route path="/athletes/:slug" element={<AthleteDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/rankings" element={<Rankings />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
