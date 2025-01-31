import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import Footer from "./components/Footer"
import Logo from "./components/Logo"

const App = () => {
  return (
    <main class='bg-[#dbafaf]'>
      <Title />
      <Logo />
      <Navbar />
      <Highlights />
      <Footer />
    </main>
    )
}

export default App
