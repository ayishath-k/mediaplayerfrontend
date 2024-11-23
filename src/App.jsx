
import './App.css'

import Footer from './assets/component/Footer'
import Header from './assets/component/Header'
import { Route, Routes } from 'react-router-dom'
import Landing from './assets/Landing'
import Home from './assets/pages/Home'
import Watchhistory from './assets/pages/Watchhistory'

function App() {


  return (
    <>
      <Header/>

     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchhistory' element={<Watchhistory/>}/>
     </Routes>
      <Footer/>
    </>
  )
}

export default App
