import {Route,Routes} from 'react-router-dom'

import Navbar from "./components/layouts/Navbar"
import Login from './components/pages/Login'
import Singup from './components/pages/Singup'
import Feature from './components/layouts/Feature'
import Landboard from './components/layouts/Landboard'
import Plan from './components/layouts/Plan'
import Contact from './components/layouts/Contact'
import Footer from './components/layouts/Footer';



const App = () => {
  return (
    <>
      <Navbar/>
      <Feature/>
      <Landboard/>
      <Plan/>
      <Contact/>
      <Routes>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup'  element={<Singup/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
