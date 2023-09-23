/* eslint-disable no-unused-vars */
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./pages/Container"
import Register from "./pages/Register"
import Contact from "./pages/Contact"
import { Route, Link, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <div className="relative bg-primary w-screen h-screen overflow-x-hidden font-main text-white">
      <Header/>
      <Routes>
         <Route path="/" element={<Container/>}/>
         <Route path="/Register" element={<Register/>}/>
         <Route exact path="/Contact" element={<Contact/>}/>
      </Routes>
     
      <Footer/>

    </div>

    </>
  )
}

export default App
