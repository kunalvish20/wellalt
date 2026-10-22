import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from './Icons'
import { navLinks, products } from '../data/store'
import { useStore } from './StoreContext'

const announcements = [
  'Free shipping above ₹699',
  'Kid-friendly everyday wellness',
  'Bundle & save up to 12%',
  'Secure prepaid & COD'
]

export default function Header() {
  const { count, setCartOpen } = useStore()
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  const [q, setQ] = useState('')
  const loc = useLocation()
  useEffect(() => { setMenu(false); setSearch(false); setQ(''); window.scrollTo(0,0) }, [loc.pathname])
  const matches = q.trim() ? products.filter(p => `${p.name} ${p.eyebrow}`.toLowerCase().includes(q.toLowerCase())) : products.slice(0,4)

  return (
    <>
      <div className="announcement">
        <span className="announcement-accessible">{announcements.join(' · ')}</span>
        <div className="announce-track" aria-hidden="true">
          {[0, 1, 2, 3].map(copy => (
            <div className="announce-group" key={copy}>
              {[...announcements, ...announcements].map((message, index) => (
                <span className="announce-item" key={`${copy}-${index}`}>
                  <span>{message}</span><i>•</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner container-wide">
          <div className="header-left">
            <button className="icon-btn menu-trigger" onClick={() => setMenu(true)}><Icon name="menu"/></button>
            <nav className="desktop-nav">
              {navLinks.map(n => <NavLink key={n.to} to={n.to}>{n.label}</NavLink>)}
            </nav>
          </div>
          <Link to="/" className="brand" aria-label="XYZ home"><span className="brand-mark">✳</span>XYZ</Link>
          <div className="header-actions">
            <button className="icon-btn" onClick={() => setSearch(true)} aria-label="Search"><Icon name="search"/></button>
            <Link to="/about" className="icon-btn desktop-only" aria-label="Account"><Icon name="user"/></Link>
            <button className="icon-btn cart-btn" onClick={() => setCartOpen(true)} aria-label={`Cart with ${count} items`}><Icon name="bag"/><span>{count}</span></button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menu ? 'open' : ''}`}>
        <div className="mobile-menu-head"><span className="brand small"><span className="brand-mark">✳</span>XYZ</span><button className="icon-btn" onClick={() => setMenu(false)}><Icon name="close"/></button></div>
        <div className="mobile-links">{navLinks.map(n => <Link to={n.to} key={n.to}>{n.label}<Icon name="arrow"/></Link>)}<Link to="/contact">Talk to us<Icon name="arrow"/></Link></div>
        <div className="mobile-promo"><span>NEW ROUTINE</span><h3>Build a happier everyday wellness shelf.</h3><Link to="/shop" className="btn btn-lime">Shop all 4</Link></div>
      </div>
      <button className={`menu-backdrop ${menu ? 'show' : ''}`} onClick={() => setMenu(false)} aria-label="Close menu"/>

      <div className={`search-sheet ${search ? 'open' : ''}`}>
        <div className="search-top container">
          <div className="search-field"><Icon name="search"/><input autoFocus={search} value={q} onChange={e => setQ(e.target.value)} placeholder="Search pops, ingredients, routines..."/><button className="icon-btn" onClick={() => setSearch(false)}><Icon name="close"/></button></div>
          <div className="search-results-grid">
            {matches.map(p => <Link to={`/products/${p.slug}`} className="search-result" key={p.id}><img src={p.image} alt=""/><div><span>{p.eyebrow}</span><strong>{p.name}</strong><small>₹{p.price}</small></div></Link>)}
          </div>
        </div>
      </div>
    </>
  )
}
