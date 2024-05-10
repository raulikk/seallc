
import { Outlet } from 'react-router-dom'
import Header from './Header'
//import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      {/* <Header />  */}
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout