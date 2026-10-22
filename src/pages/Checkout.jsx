import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PaymentBadges from '../components/PaymentBadges'
import { Icon } from '../components/Icons'
import { useStore } from '../components/StoreContext'

export default function Checkout(){
  const {cart,subtotal,clearCart}=useStore(); const [placed,setPlaced]=useState(false)
  const shipping=subtotal>=699||subtotal===0?0:69; const total=subtotal+shipping
  if(placed) return <div className="checkout-page"><SEO title="Order Demo"/><div className="order-success"><div className="success-icon"><Icon name="check" size={44}/></div><span className="micro">DEMO ORDER CREATED</span><h1>That checkout flow is working.</h1><p>No payment was taken and no order was transmitted. Connect Shopify, your payment gateway or a backend before going live.</p><Link to="/" className="btn btn-dark">Back home</Link></div></div>
  return <div className="checkout-page"><SEO title="Checkout"/><div className="checkout-wrap">
    <div className="checkout-form-panel"><Link to="/" className="checkout-brand">XYZ</Link><div className="checkout-notice"><Icon name="shield"/><span><strong>Frontend demo checkout.</strong> No live payment or customer data transmission is configured.</span></div><form onSubmit={e=>{e.preventDefault();clearCart();setPlaced(true)}}>
      <section><h2>Contact</h2><input required type="email" placeholder="Email"/><label className="checkline"><input type="checkbox"/> Email me routine tips and offers</label></section>
      <section><h2>Delivery</h2><div className="form-grid"><input required placeholder="First name"/><input required placeholder="Last name"/><input className="full" required placeholder="Address"/><input className="full" placeholder="Apartment, suite, etc. (optional)"/><input required placeholder="City"/><input required placeholder="PIN code"/><input required placeholder="State"/><input required placeholder="Phone"/></div></section>
      <section><h2>Payment</h2><div className="pay-choice"><label><input type="radio" name="pay" defaultChecked/> UPI / Cards <span>Demo</span></label><label><input type="radio" name="pay"/> Cash on Delivery <span>Demo</span></label></div><PaymentBadges/></section>
      <button disabled={!cart.length} className="btn btn-lime btn-lg place-order">{cart.length?'Place demo order':'Your cart is empty'} <Icon name="lock"/></button>
    </form></div>
    <aside className="checkout-summary"><h2>Order summary</h2>{cart.map(i=><div className="checkout-line" key={i.key}><div className="checkout-img"><img src={i.image} alt=""/><span>{i.qty}</span></div><div><strong>{i.name}</strong><small>{i.packLabel}</small></div><b>₹{i.price*i.qty}</b></div>)}{!cart.length&&<p>Your cart is empty. <Link to="/shop">Shop products</Link></p>}<div className="summary-totals"><div><span>Subtotal</span><strong>₹{subtotal}</strong></div><div><span>Shipping</span><strong>{shipping?'₹'+shipping:'Free'}</strong></div><div className="grand"><span>Total</span><strong>₹{total}</strong></div></div><div className="checkout-trust"><Icon name="shield"/><span>Secure UX pattern ready for live payment integration</span></div></aside>
  </div></div>
}
