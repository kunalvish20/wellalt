import { Link } from 'react-router-dom'
import { Icon } from './Icons'
import { useStore } from './StoreContext'

export default function ProductCard({ product, compact = false }) {
  const { addToCart } = useStore()
  const off = Math.round((1 - product.price / product.compareAt) * 100)

  return (
    <article className={`product-card ${compact ? 'compact' : ''}`}>
      <Link to={`/products/${product.slug}`} className="product-card-media" aria-label={product.name}>
        <span className="product-chip">{product.badge}</span>
        <img src={product.image} alt="" loading="lazy" />
      </Link>

      <div className="product-card-body">
        <div className="product-card-meta">
          <div className="rating-row"><Icon name="star" size={14} /><strong>{product.rating}</strong><span>({product.reviews})</span></div>
          <span className="age-pill">AGES 2+</span>
        </div>

        <Link to={`/products/${product.slug}`} className="product-title-link"><h3>{product.name}</h3></Link>
        <p className="product-eyebrow">{product.eyebrow.replace(/\s*[•·]\s*Ages 2\+$/i, '')}</p>

        <div className="price-row">
          <strong>₹{product.price}</strong>
          <s>₹{product.compareAt}</s>
          <span>{off}% OFF</span>
        </div>

        <button type="button" className="btn btn-lime card-atc" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}>
          Add to cart <Icon name="bag" size={18} />
        </button>
      </div>
    </article>
  )
}
