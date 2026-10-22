import { Link } from 'react-router-dom'
import { Icon } from './Icons'
import PaymentBadges from './PaymentBadges'

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="newsletter container-wide">
        <div><span className="micro">PARENTS' INBOX, BUT USEFUL</span><h3>Get 5% off your first order + smarter routine tips.</h3></div>
        <form onSubmit={e => e.preventDefault()} className="newsletter-form"><input type="email" required placeholder="email@example.com"/><button aria-label="Subscribe"><Icon name="arrow"/></button></form>
      </div>
      <div className="footer-main">
        <div className="candy c1">✦</div><div className="candy c2">◖◗</div><div className="candy c3">◆</div><div className="candy c4">✦</div><div className="candy c5">◖◗</div>
        <div className="footer-grid container-wide">
          <div className="footer-brand"><div className="footer-logo"><span className="brand-mark">✳</span>XYZ</div><h2>WELLNESS KIDS<br/>DON'T RUN FROM.</h2><p>Everyday kid-friendly formats with parent-first clarity. Designed for routines, not drama.</p><div className="social-row"><a href="#" aria-label="Instagram"><Icon name="instagram"/></a><a href="mailto:hello@xyz.example" aria-label="Email"><Icon name="mail"/></a></div></div>
          <div className="footer-col"><h4>SHOP</h4><Link to="/shop">All products</Link><Link to="/products/daily-gut-pops">Gut Pops</Link><Link to="/products/throat-comfort-pops">Throat Comfort</Link><Link to="/products/daily-immune-pops">Immune Pops</Link><Link to="/products/travel-comfort-pops">Travel Pops</Link></div>
          <div className="footer-col"><h4>BRAND</h4><Link to="/about">Our story</Link><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link><Link to="/shop">Bundles</Link></div>
          <div className="footer-col"><h4>LEGAL</h4><Link to="/terms">Terms</Link><Link to="/privacy">Privacy</Link><Link to="/returns">Returns</Link></div>
          <div className="footer-col"><h4>HELP</h4><Link to="/shipping">Shipping</Link><Link to="/returns">Returns</Link><Link to="/contact">Order help</Link><Link to="/faq">FAQs</Link></div>
        </div>
        <div className="footer-bottom container-wide"><span>© 2026 XYZ. DEMO STOREFRONT.</span><PaymentBadges light/></div>
      </div>
    </footer>
  )
}
