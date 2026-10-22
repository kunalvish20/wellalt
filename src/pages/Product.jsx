import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/store'
import ProductCard from '../components/ProductCard'
import SEO from '../components/SEO'
import PaymentBadges from '../components/PaymentBadges'
import { Icon } from '../components/Icons'
import { useStore } from '../components/StoreContext'

const Accordion=({title,children,open=false})=>{const [on,setOn]=useState(open);return <div className={`pdp-accordion ${on?'open':''}`}><button onClick={()=>setOn(!on)}><strong>{title}</strong><Icon name="chevron"/></button><div className="acc-body">{children}</div></div>}

export default function Product(){
  const {slug}=useParams(); const product=products.find(p=>p.slug===slug); const {addToCart}=useStore();
  const [packIndex,setPackIndex]=useState(0); const [qty,setQty]=useState(1); const [tab,setTab]=useState(0)
  if(!product) return <div className="page-shell container"><h1>Product not found</h1><Link to="/shop">Back to shop</Link></div>
  const pack=product.packs[packIndex]
  const off=Math.max(0,Math.round((1-pack.price/(product.compareAt*(packIndex+1)))*100))
  const related=products.filter(p=>p.id!==product.id).slice(0,3)
  const schema={"@context":"https://schema.org","@type":"Product",name:product.name,description:product.seo,image:[window.location.origin+product.image],brand:{"@type":"Brand",name:"XYZ"},offers:{"@type":"Offer",priceCurrency:"INR",price:pack.price,availability:"https://schema.org/InStock"},aggregateRating:{"@type":"AggregateRating",ratingValue:product.rating,reviewCount:product.reviews}}
  return <>
    <SEO title={product.name} description={product.seo} image={product.image} schema={schema}/>
    <div className="pdp-shell">
      <div className="pdp-main container-wide">
        <div className="pdp-gallery">
          <div className="pdp-main-image"><span className="pdp-badge">{product.badge}</span><img src={product.image} alt={product.name}/><div className="pdp-image-note">A little goodness for the everyday</div></div>
          <div className="thumb-row">
            {[0,1,2,3].map((x,i)=><button key={i} onClick={()=>setTab(i)} className={tab===i?'active':''}><img src={product.image} alt="" style={{transform:`rotate(${(i-1.5)*2}deg) scale(${1-i*.03})`}}/></button>)}
          </div>
        </div>
        <div className="pdp-info">
          <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/shop">Shop</Link><span>/</span><span>{product.name}</span></div>
          <div className="rating-line"><span className="stars">★★★★★</span><strong>{product.rating}</strong><a href="#reviews">{product.reviews} reviews</a></div>
          <span className="pdp-eyebrow">{product.eyebrow}</span>
          <h1>{product.name}</h1>
          <p className="pdp-tagline">{product.tagline}</p>
          <div className="pdp-price"><strong>₹{pack.price}</strong><s>₹{product.compareAt*(packIndex+1)}</s>{off>0&&<span>Save {off}%</span>}</div>
          <p className="tax-note">Inclusive of taxes · Shipping calculated at checkout</p>
          <div className="benefit-bullets">{product.bullets.map(b=><span key={b}><Icon name="check" size={16}/>{b}</span>)}</div>
          <div className="pack-picker"><div className="field-label"><strong>Choose pack</strong><span>Best value highlighted</span></div><div className="pack-options">{product.packs.map((p,i)=><button onClick={()=>setPackIndex(i)} className={packIndex===i?'active':''} key={p.label}><strong>{p.label}</strong><span>₹{p.price}</span>{i===1&&<em>MOST POPULAR</em>}</button>)}</div></div>
          <div className="atc-row"><div className="qty-control"><button onClick={()=>setQty(Math.max(1,qty-1))}><Icon name="minus"/></button><span>{qty}</span><button onClick={()=>setQty(qty+1)}><Icon name="plus"/></button></div><button className="btn btn-lime btn-lg pdp-atc" onClick={()=>addToCart(product,qty,pack)}>Add to cart · ₹{pack.price*qty}<Icon name="bag"/></button></div>
          <div className="delivery-trust"><span><Icon name="truck"/> Free shipping ₹699+</span><span><Icon name="refresh"/> Easy support</span><span><Icon name="lock"/> Secure checkout</span></div>
          <PaymentBadges/>
          <div className="pdp-accordions">
            <Accordion title="What it is" open><p>{product.short}</p><p>{product.whatItDoes}</p></Accordion>
            <Accordion title="Ingredients"><p>{product.ingredients}</p><p className="fine-print">Always verify the final production label and allergen statement before purchase.</p></Accordion>
            <Accordion title="How to use"><p>{product.use}</p><p className="fine-print">For children with medical conditions, allergies, ongoing medicines or persistent symptoms, ask a qualified paediatric healthcare professional.</p></Accordion>
            <Accordion title="Shipping & returns"><p>Orders usually dispatch in 1–2 business days in this demo policy. Unopened products can be requested for return within 7 days of delivery, subject to final store policy.</p></Accordion>
          </div>
        </div>
      </div>

      <section className="pdp-proof-bar"><div className="container-wide"><div><strong>2+</strong><span>Age-focused range</span></div><div><strong>clear</strong><span>Ingredient visibility</span></div><div><strong>4</strong><span>Focused routines</span></div><div><strong>easy</strong><span>Portable format</span></div></div></section>

      <section className="section pdp-benefits"><div className="container-wide"><div className="section-head"><div><span className="micro">WHY THIS FORMAT WORKS</span><h2>LESS NEGOTIATION.<br/>MORE ROUTINE.</h2></div><p>Simple details that help you choose a routine with confidence.</p></div><div className="benefit-grid"><article><span>01</span><h3>Familiar format</h3><p>Individually wrapped pops feel like a treat moment, not a complicated ritual.</p></article><article><span>02</span><h3>Clear ingredients</h3><p>See what goes into every pop, with straightforward guidance on how to use it.</p></article><article><span>03</span><h3>Flexible packs</h3><p>Choose the pack size that fits your family’s everyday routine.</p></article><article><span>04</span><h3>Easy to carry</h3><p>Little pops tuck neatly into school bags and travel pouches.</p></article></div></div></section>

      <section className="section pdp-reviews" id="reviews"><div className="container-wide"><div className="section-head"><div><span className="micro">SOCIAL PROOF PLACEHOLDER</span><h2>WHAT FAMILIES CAN SAY.</h2></div><p>Use this block only with real, verified customer feedback. The sample cards below are clearly marked demo copy.</p></div><div className="review-grid">{['“The format made our morning routine feel much easier.”','“Simple pack choices and the kids liked the flavour.”','“The travel pack lives in our family pouch now.”'].map((q,i)=><article key={i}><div className="stars">★★★★★</div><p>{q}</p><strong>Sample parent review</strong><span>DEMO CONTENT · replace before launch</span></article>)}</div></div></section>

      <section className="section related"><div className="container-wide"><div className="section-head"><div><span className="micro">PAIR IT WITH</span><h2>COMPLETE THE LITTLE ROUTINE.</h2></div></div><div className="product-grid three">{related.map(p=><ProductCard product={p} key={p.id}/>)}</div></div></section>
    </div>
    <div className="mobile-sticky-atc"><div><span>{product.name}</span><strong>₹{pack.price}</strong></div><button className="btn btn-lime" onClick={()=>addToCart(product,1,pack)}>Add to cart</button></div>
  </>
}
