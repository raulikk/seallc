
import { Outlet } from 'react-router-dom'
import Header from './Header'
//import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import Footer from './Footer';
import Logo from './Logo';
import MenuButton from './MenuButton';
import { useState } from 'react';
import { Show } from '@chakra-ui/react';

const Layout = () => {
  const [menuVisible, setMenuVisible]=useState(false)
  return (
    <>
      <Logo/> 
      <Show below="md"> 
      <MenuButton  visibility={menuVisible} onButtonClick={() => setMenuVisible(!menuVisible)}/>
      </Show>
      <Header visibility={menuVisible} onLinkClick={()=> setMenuVisible(false)} /> 
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout