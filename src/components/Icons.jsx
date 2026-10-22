import React from 'react'

const base = { width: 22, height: 22, fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const Icon = ({ name, size = 22, className = '' }) => {
  const props = { ...base, width: size, height: size, className }
  const paths = {
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="M6 6l12 12M18 6L6 18"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></>,
    bag: <><path d="M6 8h12l1 12H5L6 8z"/><path d="M9 9V7a3 3 0 016 0v2"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M5 20c1.8-4 4.2-6 7-6s5.2 2 7 6"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <><path d="M5 12h14"/></>,
    trash: <><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13"/></>,
    star: <><path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3z"/></>,
    check: <><path d="M5 12.5l4 4L19 7"/></>,
    truck: <><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
    shield: <><path d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></>,
    refresh: <><path d="M20 6v5h-5"/><path d="M4 18v-5h5"/><path d="M18.5 10a7 7 0 00-12-3L4 11M5.5 14a7 7 0 0012 3l2-4"/></>,
    play: <><circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4z" fill="currentColor" stroke="none"/></>,
    heart: <><path d="M20 8.5c0 5-8 10-8 10s-8-5-8-10A4.5 4.5 0 0112 5a4.5 4.5 0 018 3.5z"/></>,
    chevron: <><path d="M8 10l4 4 4-4"/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></>,
    sparkle: <><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2z"/><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></>,
    phone: <><path d="M7 3h4l1 5-3 2a14 14 0 006 6l2-3 4 2v4c0 1-1 2-2 2C10 20 4 14 3 5c0-1 1-2 2-2h2z"/></>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>{paths[name] || paths.sparkle}</svg>
}
