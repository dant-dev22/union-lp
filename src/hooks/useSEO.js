import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { siteMeta } from '../data/mockData'

/**
 * Returns SEO meta for react-helmet-async.
 * Use with <Helmet> in page components for dynamic titles/descriptions.
 */
export function useSEO({ title, description, image, type = 'website', noIndex = false }) {
  const location = useLocation()
  const canonical = useMemo(
    () => `${siteMeta.baseUrl}${location.pathname}`,
    [location.pathname]
  )
  const fullTitle = title ? `${title} | ${siteMeta.name}` : siteMeta.name
  const fullDescription = description || siteMeta.description
  const fullImage = image
    ? (image.startsWith('http') ? image : `${siteMeta.baseUrl}${image}`)
    : `${siteMeta.baseUrl}${siteMeta.ogImage}`

  return {
    title: fullTitle,
    description: fullDescription,
    canonical,
    ogTitle: fullTitle,
    ogDescription: fullDescription,
    ogImage: fullImage,
    ogType: type,
    ogUrl: canonical,
    noIndex,
  }
}
