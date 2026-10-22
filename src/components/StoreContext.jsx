import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/store'

const Ctx = createContext(null)

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('xyz-cart') || localStorage.getItem('kidora-cart')) || [] } catch { return [] }
  })
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => { localStorage.setItem('xyz-cart', JSON.stringify(cart)) }, [cart])

  const addToCart = (product, qty = 1, pack = null) => {
    const selectedPack = pack || product.packs?.[0] || { label: '1 Pack', price: product.price }
    const key = `${product.id}:${selectedPack.label}`
    setCart(prev => {
      const found = prev.find(i => i.key === key)
      if (found) return prev.map(i => i.key === key ? { ...i, qty: i.qty + qty } : i)
      return [...prev, { key, productId: product.id, slug: product.slug, name: product.name, image: product.image, qty, packLabel: selectedPack.label, price: selectedPack.price }]
    })
    setCartOpen(true)
  }

  const updateQty = (key, qty) => setCart(prev => qty <= 0 ? prev.filter(i => i.key !== key) : prev.map(i => i.key === key ? { ...i, qty } : i))
  const removeItem = key => setCart(prev => prev.filter(i => i.key !== key))
  const clearCart = () => setCart([])

  const count = useMemo(() => cart.reduce((s, i) => s + i.qty, 0), [cart])
  const subtotal = useMemo(() => cart.reduce((s, i) => s + i.qty * i.price, 0), [cart])

  const value = { cart, cartOpen, setCartOpen, addToCart, updateQty, removeItem, clearCart, count, subtotal, products }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useStore = () => useContext(Ctx)
