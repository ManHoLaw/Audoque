import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import { useState } from "react"

const App = () => {
  const [selection, setSelection] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main class='bg-[#dbafaf] min-h-screen w-full flex flex-col'>
      <div>
        <Title isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        <Logo />
        <Navbar selection={selection} setSelection={setSelection} 
        isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <Highlights selection={selection} />


      <div class='flex-grow'></div>

      <Footer />
    </main>
    )
}

export default App
