import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from "./pages/Container"


function App() {

  return (
    <>
    <div className="relative bg-primary w-screen h-screen overflow-x-hidden font-main text-white">
      <Header/>
      <Container/>
      <Footer/>

    </div>

    </>
  )
}

export default App
