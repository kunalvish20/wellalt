import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import SEO from '../components/SEO'
import { products } from '../data/store'

export default function Shop(){
  const [sort,setSort]=useState('featured')
  const sorted=useMemo(()=>{
    const p=[...products]
    if(sort==='low') p.sort((a,b)=>a.price-b.price)
    if(sort==='high') p.sort((a,b)=>b.price-a.price)
    if(sort==='rating') p.sort((a,b)=>b.rating-a.rating)
    return p
  },[sort])
  return <>
    <SEO title="Shop Kids Wellness Pops" description="Shop XYZ's four focused kid-friendly wellness routines for tummy support, throat comfort, daily nutrition and travel."/>
    <section className="shop-hero"><div className="container"><span className="micro">4 PRODUCTS. ZERO SKU OVERLOAD.</span><h1>SHOP THE ROUTINES.</h1><p>Pick the everyday moment. We keep the rest simple.</p></div></section>
    <section className="section shop-list"><div className="container-wide"><div className="shop-toolbar"><span><strong>{products.length}</strong> products</span><label>Sort by <select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="rating">Highest rated</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div><div className="product-grid">{sorted.map(p=><ProductCard product={p} key={p.id}/>)}</div></div></section>
  </>
}
