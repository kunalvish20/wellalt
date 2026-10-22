import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import VideoReviews from '../components/VideoReviews'
import SEO from '../components/SEO'
import { Icon } from '../components/Icons'
import { products } from '../data/store'
import HeroSlider from '../components/HeroSlider'

export default function Home(){
  return <>
    <SEO title="Everyday Wellness, Made Kid-Friendly" description="XYZ makes playful, parent-friendly everyday wellness products for kids ages 2+. Shop gut, throat comfort, immunity and travel routines." />

    <HeroSlider />

    <section className="section bestsellers" id="best">
      <div className="container-wide">
        <div className="best-picks-heading">
          <div>
            <span className="micro">THE EVERYDAY EDIT</span>
            <h2>Good days start with little things.</h2>
            <p>Four thoughtful routines. Find the one that fits your day.</p>
          </div>
          <Link to="/shop" className="text-link strong">Shop all products <Icon name="arrow" size={18}/></Link>
        </div>

        <div className="product-grid">{products.map(p => <ProductCard key={p.id} product={p}/>)}</div>
        <div className="center-cta"><Link className="text-link strong" to="/shop">VIEW ALL PRODUCTS <Icon name="arrow" size={18}/></Link></div>
      </div>
    </section>

    <section className="proof-strip section">
      <div className="container-wide proof-inner">
        <div className="proof-title">
          <span className="micro">SO… WHAT IS XYZ?</span>
          <h2>BIG-PARENT PEACE.<br/><span>LITTLE-KID ENERGY.</span></h2>
          <p>Clear ingredients. Simple routines. Kid-friendly formats.</p>
        </div>
        <div className="proof-circles">
          <div><strong>clear</strong><span>ingredient story</span></div>
          <div><strong>2+</strong><span>age-focused range</span></div>
          <div><strong>zero</strong><span>boring routine vibes</span></div>
          <div><strong>4</strong><span>simple use-cases</span></div>
        </div>
      </div>
    </section>

    <section className="need-section section">
      <div className="container-wide">
        <div className="section-head">
          <div className="need-heading-line">
            <img src="/decor/diya.png" alt="" aria-hidden="true" loading="lazy" />
            <h2>Discover Our Best Picks</h2>
            <img src="/decor/diya.png" alt="" aria-hidden="true" loading="lazy" />
          </div>
          <Link to="/shop" className="text-link strong">SHOP ALL <Icon name="arrow" size={18}/></Link>
        </div>
        <div className="need-grid">
          {[
            ['TUMMY ROUTINE','Daily Gut Pops','/products/daily-gut-pops','color-mix(in srgb, var(--lime) 30%, var(--cream))'],
            ['SCRATCHY-DAY COMFORT','Throat Comfort Pops','/products/throat-comfort-pops','color-mix(in srgb, var(--purple) 8%, var(--cream))'],
            ['EVERYDAY NUTRITION','Daily Immune Pops','/products/daily-immune-pops','color-mix(in srgb, var(--lime) 40%, var(--cream))'],
            ['CAR. PLANE. GO.','Travel Comfort Pops','/products/travel-comfort-pops','color-mix(in srgb, var(--purple) 12%, var(--cream))']
          ].map(([k,t,to,bg],i)=><Link to={to} className="need-card" style={{background:bg}} key={t}><span>{k}</span><h3>{t}</h3><div className="need-visual"><img src={products[i].image} alt=""/></div><b>Explore <Icon name="arrow" size={18}/></b></Link>)}
        </div>
      </div>
    </section>

    <VideoReviews/>

    <section className="section trust-story">
      <div className="container-wide trust-story-grid">
        <div className="story-card dark-card">
          <span className="micro light">PARENT-FIRST BY DESIGN</span>
          <h2>NO MYSTERY.<br/>JUST CLARITY.</h2>
          <p>Ingredients, age guidance, usage and safety notes — easy to find before you buy.</p>
          <Link to="/about" className="btn btn-lime">Read our standard <Icon name="arrow"/></Link>
        </div>
        <div className="story-card checklist-card">
          <div className="scribble">✓</div>
          <h3>Know before you buy</h3>
          <ul>
            <li><Icon name="check"/> Plain-language ingredients</li>
            <li><Icon name="check"/> Clear age guidance</li>
            <li><Icon name="check"/> Straightforward usage notes</li>
            <li><Icon name="check"/> Shipping & returns in one tap</li>
          </ul>
          <p className="fine-print">Final label and wellness claims should match your actual formulation and applicable regulations.</p>
        </div>
      </div>
    </section>

    <section className="section bundle-banner">
      <div className="container-wide bundle-inner">
        <div><span className="micro">BUILD YOUR SHELF</span><h2>FOUR ROUTINES.<br/>ONE EASY SHELF.</h2><p>Pick two or more and keep everyday wellness simple.</p><Link to="/shop" className="btn btn-dark btn-lg">Build a bundle <Icon name="arrow"/></Link></div>
        <div className="bundle-stack">{products.map((p,i)=><img style={{'--i':i}} src={p.image} alt="" key={p.id}/>)}</div>
      </div>
    </section>
  </>
}
