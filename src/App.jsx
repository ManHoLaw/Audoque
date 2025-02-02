import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import { useState } from "react"

const App = () => {
  const [selection, setSelection] = useState(null);
  return (
    <main class='bg-[#dbafaf]'>
      <Title />
      <Logo />
      <Navbar selection={selection} setSelection={setSelection} />
      <Highlights selection={selection} />
      <Footer />
    </main>
    )
}

export default App
