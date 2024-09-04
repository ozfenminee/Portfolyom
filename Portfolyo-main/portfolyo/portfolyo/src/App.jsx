import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import  Navbar from './components/Navbar'
import Footer from './components/Footer'
import Experience from './pages/Experience';
import Home from './pages/Home'
import Projects from './pages/Projects'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'> 
        
         <Router>
          <Navbar/>
          <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/projects' element={<Projects/>}/>
           <Route path='/experience' element={<Experience/>}/>
          </Routes>
          <Footer/>
         </Router>
          

      </div>
    </>
  )
}

export default App
