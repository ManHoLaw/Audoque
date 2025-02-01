import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Title from "./components/Title"
import Footer from "./components/Footer"
import Logo from "./components/Logo"

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
