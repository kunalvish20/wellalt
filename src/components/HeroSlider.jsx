import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icons'

const duration = 8000

const slides = [
  {
    eyebrow: 'THE FESTIVE EDIT',
    title: 'Little sparks.',
    accent: 'Big celebrations.',
    description: 'Thoughtful everyday care for brighter family moments.',
    image: '/banner-w.png',
    imageAlt: 'Festive Diwali banner with two children and a throat care spray',
    label: 'Festive edit'
  },
  {
    eyebrow: 'THE EVERYDAY KIT',
    title: 'One thoughtful kit.',
    accent: 'Everyday wellness.',
    description: 'The daily wellness kit for little routines.',
    image: '/banners/banner-2-desktop.png',
    mobileImage: '/banners/banner-2-mobile.png',
    imageAlt: 'Wellopia daily wellness kit with hydration, cough and cold, immunity, hygiene and tummy care products',
    label: 'Everyday kit'
  },
  {
    eyebrow: 'NEW GUILT FREE',
    title: 'Immune Support Pops.',
    accent: 'Orange flavour.',
    description: 'The new Wellopia Immune Support Pops for ages 2+.',
    image: '/banners/banner-3-desktop.png',
    mobileImage: '/banners/banner-3-mobile.png',
    imageAlt: 'Wellopia Immune Support Pops orange flavour banner with product benefits',
    label: 'Immune support'
  }
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStart = useRef(null)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => setActive(current => (current + 1) % slides.length), duration)
    return () => window.clearInterval(timer)
  }, [paused, active])

  const go = step => setActive(current => (current + step + slides.length) % slides.length)

  return (
    <div className={`hero-stage is-campaign ${active === 0 ? 'is-festive' : 'is-artwork'}`}>
      <section
        className={`hero hero-carousel is-banner${paused ? ' is-paused' : ''}`}
        aria-label="Featured XYZ routines"
        aria-roledescription="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
        }}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft') { event.preventDefault(); go(-1) }
          if (event.key === 'ArrowRight') { event.preventDefault(); go(1) }
        }}
      >
        <div
          className="hero-slider"
          onTouchStart={event => { touchStart.current = event.touches[0]?.clientX ?? null }}
          onTouchEnd={event => {
            if (touchStart.current === null) return
            const delta = event.changedTouches[0].clientX - touchStart.current
            if (Math.abs(delta) > 55) go(delta < 0 ? 1 : -1)
            touchStart.current = null
          }}
        >
          <div className="hero-slides">
            {slides.map((slide, index) => {
              const position = index === active ? 'is-active' : index === (active + 1) % slides.length ? 'is-next' : 'is-prev'
              return (
                <article
                  className={`hero-slide ${position} hero-slide-banner${index === 0 ? ' hero-slide-featured' : ' hero-slide-artwork'}`}
                  key={slide.label}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
                  aria-hidden={index !== active}
                >
                  <>
                      {index === 0 ? (
                        <>
                          <picture className="hero-banner-picture">
                            <img className="hero-banner-image" src={slide.image} alt={slide.imageAlt} fetchPriority="high" />
                          </picture>
                          <div className="hero-mobile-campaign" role="img" aria-label="Lil' Spark Sale. This Diwali, gift something that lasts. Two children with throat care spray.">
                            <div className="hero-mobile-sale-copy" aria-hidden="true"><span>Lil’</span><strong>Spark</strong><em>SALE</em></div>
                            <div className="hero-mobile-message-copy" aria-hidden="true"><span>This Diwali</span><strong>Gift Something<br />That Lasts</strong></div>
                            <span className="hero-mobile-family"><img src={slide.image} alt="" /></span>
                          </div>
                        </>
                      ) : (
                        <picture className="hero-banner-picture">
                          <source media="(max-width: 699px)" srcSet={slide.mobileImage} />
                          <img className="hero-banner-image" src={slide.image} alt={slide.imageAlt} loading="lazy" />
                        </picture>
                      )}
                      <div className="hero-banner-caption">
                        <span className="hero-kicker"><span className="hero-kicker-dot" />{slide.eyebrow}</span>
                        <h1>{slide.title}<br /><em>{slide.accent}</em></h1>
                        <p>{slide.description}</p>
                        <Link to="/shop" className="btn btn-lime" tabIndex={index === active ? 0 : -1}>Shop the collection <Icon name="arrow" /></Link>
                      </div>
                      <Link to="/shop" className="hero-campaign-link" aria-label={`Shop ${slide.label}`} tabIndex={index === active ? 0 : -1} />
                  </>
                </article>
              )
            })}
          </div>
        </div>

        <div className="hero-carousel-nav">
          <div className="hero-nav-inner container-wide">
            <div className="hero-pagination" aria-label="Choose featured slide">
              {slides.map((slide, index) => (
                <button
                  className={`hero-page${index === active ? ' is-active' : ''}`}
                  key={slide.label}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${slide.label}`}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => setActive(index)}
                >
                  <span className="hero-page-number">0{index + 1}</span>
                  <span className="hero-page-name">{slide.label}</span>
                  <span className="hero-page-track"><span key={index === active ? active : 'idle'} /></span>
                </button>
              ))}
            </div>
            <div className="hero-nav-actions">
              <Link className="hero-nav-shop" to="/shop">Shop all products <Icon name="arrow" size={17} /></Link>
              <div className="hero-slider-controls">
                <button type="button" onClick={() => go(-1)} aria-label="Previous slide"><Icon name="arrow" size={18} /></button>
                <button type="button" onClick={() => go(1)} aria-label="Next slide"><Icon name="arrow" size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-curve" aria-hidden="true"><img src="/curve-line.png" alt="" /></div>
    </div>
  )
}
