import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
export default function NotFound(){return <section className="not-found"><SEO title="Page Not Found"/><div className="container"><span>404</span><h1>Oops. This routine wandered off.</h1><p>The page you’re looking for doesn’t exist.</p><Link to="/" className="btn btn-lime">Go home</Link></div></section>}
