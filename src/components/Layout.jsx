import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

export default function Layout({ children }) {
  return <div className="app-shell"><Header/><main>{children}</main><Footer/><CartDrawer/></div>
}
