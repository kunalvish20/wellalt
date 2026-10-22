import { Link, useNavigate } from 'react-router-dom'
import { useStore } from './StoreContext'
import { Icon } from './Icons'
import { STORE } from '../data/store'

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cart, updateQty, removeItem, subtotal } = useStore()
  const navigate = useNavigate()
  const remaining = Math.max(0, STORE.freeShippingAt - subtotal)
  const progress = Math.min(100, subtotal / STORE.freeShippingAt * 100)

  return (
    <>
      <button className={`drawer-backdrop ${cartOpen ? 'show' : ''}`} aria-label="Close cart" onClick={() => setCartOpen(false)} />
      <aside className={`cart-drawer ${cartOpen ? 'show' : ''}`} aria-hidden={!cartOpen}>
        <div className="drawer-head">
          <div><span className="micro">YOUR BAG</span><h2>{cart.length ? 'Good choices.' : 'Your bag is empty.'}</h2></div>
          <button className="icon-btn" onClick={() => setCartOpen(false)}><Icon name="close" /></button>
        </div>
        <div className="ship-meter-wrap">
          <div className="ship-copy">{remaining > 0 ? <>Add <strong>₹{remaining}</strong> more for free shipping.</> : <><strong>Free shipping unlocked.</strong> Nice.</>}</div>
          <div className="ship-meter"><span style={{ width: `${progress}%` }} /></div>
        </div>
        <div className="drawer-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-orbit"><Icon name="bag" size={42}/></div>
              <p>Pick a routine your little one will actually look forward to.</p>
              <Link to="/shop" className="btn btn-dark" onClick={() => setCartOpen(false)}>Shop bestsellers</Link>
            </div>
          ) : cart.map(item => (
            <div className="cart-line" key={item.key}>
              <Link to={`/products/${item.slug}`} onClick={() => setCartOpen(false)} className="cart-thumb"><img src={item.image} alt="" /></Link>
              <div className="cart-line-info">
                <Link to={`/products/${item.slug}`} onClick={() => setCartOpen(false)}><strong>{item.name}</strong></Link>
                <span>{item.packLabel}</span>
                <div className="qty-line">
                  <div className="qty-control mini">
                    <button onClick={() => updateQty(item.key, item.qty - 1)}><Icon name="minus" size={14}/></button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.key, item.qty + 1)}><Icon name="plus" size={14}/></button>
                  </div>
                  <strong>₹{item.price * item.qty}</strong>
                </div>
              </div>
              <button className="trash-btn" onClick={() => removeItem(item.key)}><Icon name="trash" size={17}/></button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="drawer-foot">
            <div className="subtotal-row"><span>Subtotal</span><strong>₹{subtotal}</strong></div>
            <p>Taxes included. Shipping and discounts calculated at checkout.</p>
            <button className="btn btn-lime checkout-btn" onClick={() => { setCartOpen(false); navigate('/checkout') }}>Secure checkout <Icon name="lock" size={18}/></button>
            <div className="drawer-pay-note">100% secure payments · Easy support</div>
          </div>
        )}
      </aside>
    </>
  )
}
