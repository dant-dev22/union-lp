import { useState } from 'react'
import { motion } from 'framer-motion'

export function LazyImage({ src, alt, className = '', ...props }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <span className={`block overflow-hidden relative ${className}`}>
      {!loaded && (
        <span
          className="absolute inset-0 bg-charcoal-800 animate-pulse"
          aria-hidden="true"
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full h-full object-cover ${!loaded ? 'absolute inset-0' : ''}`}
        {...props}
      />
    </span>
  )
}
