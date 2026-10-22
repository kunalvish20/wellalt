import { useEffect } from 'react'

export default function SEO({ title, description, image, schema }) {
  useEffect(() => {
    const oldTitle = document.title
    document.title = title ? `${title} | XYZ` : 'XYZ — Everyday Wellness, Made Kid-Friendly'
    const ensure = (name, attr = 'name') => {
      let el = document.head.querySelector(`meta[${attr}="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
      return el
    }
    if (description) {
      ensure('description').setAttribute('content', description)
      ensure('og:description', 'property').setAttribute('content', description)
    }
    ensure('og:title', 'property').setAttribute('content', document.title)
    ensure('og:type', 'property').setAttribute('content', 'website')
    if (image) ensure('og:image', 'property').setAttribute('content', image)

    let script
    if (schema) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.xyzSeo = '1'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    }
    return () => {
      document.title = oldTitle
      if (script) script.remove()
    }
  }, [title, description, image, schema])
  return null
}
