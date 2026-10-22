import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icons'
import { products } from '../data/store'

const videoSrc = '/videos/quinn_vkuf2me16ec0jhoc65k539ee.mp4'

const reels = [
  { src: videoSrc, title: 'Morning moments', productIndex: 0 },
  { src: videoSrc, title: 'Ready for the day', productIndex: 2 },
  { src: videoSrc, title: 'A little daily care', productIndex: 1 },
  { src: videoSrc, title: 'Out and about', productIndex: 3 },
  { src: videoSrc, title: 'A simple routine', productIndex: 3 },
  { src: videoSrc, title: 'Everyday favourites', productIndex: 0 }
]

const price = value => new Intl.NumberFormat('en-IN', {
  style: 'currency', currency: 'INR', maximumFractionDigits: 0
}).format(value)

export default function VideoReviews() {
  const [active, setActive] = useState(null)
  const closeButton = useRef(null)
  const dialog = useRef(null)
  const reducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (active === null) return undefined
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    const onKeyDown = event => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'Tab') {
        const focusable = dialog.current?.querySelectorAll('button, a')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      previousFocus?.focus()
    }
  }, [active])

  return (
    <section className="video-reviews section-purple" aria-labelledby="video-reviews-title">
      <div className="container-wide">
        <div className="video-section-title">
          <span className="micro light">REAL ROUTINES</span>
          <h2 id="video-reviews-title">LOVED BY LITTLE ROUTINES.</h2>
          <p>Tap a video to watch. Explore the featured product below.</p>
        </div>

        <div className="reel-row" aria-label="Video clips and featured products" tabIndex={0}>
          {reels.map((reel, index) => {
            const product = products[reel.productIndex]
            const discount = Math.round((1 - product.price / product.compareAt) * 100)
            return (
              <article className="reel-card" key={`${reel.src}-${index}`}>
                <button
                  className="reel-media"
                  type="button"
                  aria-label={`Play ${reel.title} video`}
                  onClick={() => setActive(index)}
                >
                  <video src={reel.src} poster="/product-image.png" muted loop autoPlay={!reducedMotion.current} playsInline preload="metadata" aria-hidden="true" />
                  <span className="reel-play" aria-hidden="true"><Icon name="play" size={21} /></span>
                  <span className="reel-watch">WATCH VIDEO</span>
                </button>
                <Link to={`/products/${product.slug}`} className="reel-product" aria-label={`View ${product.name}, ${price(product.price)}`}>
                  <span className="reel-product-image"><img src="/product-image.png" alt="" loading="lazy" /></span>
                  <strong className="reel-product-name">{product.name}</strong>
                  <span className="reel-product-note">Featured product · Ages 2+</span>
                  <span className="reel-price">
                    <b>{price(product.price)}</b>
                    <s>{price(product.compareAt)}</s>
                    <em>{discount}% off</em>
                  </span>
                </Link>
              </article>
            )
          })}
        </div>
      </div>

      {active !== null && (
        <div className="video-modal" role="presentation" onClick={() => setActive(null)}>
          <div ref={dialog} className="video-modal-card" role="dialog" aria-modal="true" aria-label={reels[active].title} onClick={event => event.stopPropagation()}>
            <button ref={closeButton} className="icon-btn" type="button" onClick={() => setActive(null)} aria-label="Close video"><Icon name="close" /></button>
            <video src={reels[active].src} controls autoPlay playsInline />
            <div className="video-modal-copy">
              <strong>{reels[active].title}</strong>
              <span>Explore {products[reels[active].productIndex].name} below the clip.</span>
              <Link to={`/products/${products[reels[active].productIndex].slug}`} onClick={() => setActive(null)}>View product <Icon name="arrow" size={16} /></Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
