import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import CakeDetail from "./components/CakeDetail";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Popup from "./components/Popup";
import Member from "./components/Member";
import Promotion from "./components/Promotion";
import Delivery from "./components/Delivery";
import Order from "./components/order";

const App = () => {
  const [selection, setSelection] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [popupCake, setPopupCake] = useState(false);

  return (
    <Router>
      <MainContent
        selection={selection}
        setSelection={setSelection}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        popupCake={popupCake}
        setPopupCake={setPopupCake}
      />
    </Router>
  );
};

const MainContent = ({ selection, setSelection, isSidebarOpen, setIsSidebarOpen, popupCake, setPopupCake }) => {
  const location = useLocation();
  const isCakeDetailPage = location.pathname.startsWith("/cake/");

  return (
    <main className="bg-[#dbafaf] min-h-screen w-full flex flex-col">
      <Title
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        popupCake={popupCake}
        setPopupCake={setPopupCake}
      />
      <Logo 
        setSelection={setSelection}
      />

      {/* Hide Navbar on Cake Detail page */}
      {!isCakeDetailPage && (
        <Navbar
          selection={selection}
          setSelection={setSelection}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      )}
      {popupCake && popupCake.title && (
        <Popup closePopup={() => setPopupCake(null)} cake={popupCake} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Highlights
              selection={selection}
              popupCake={popupCake}
              setPopupCake={setPopupCake}
            />
          }
        />
        <Route path="/cake/:title" 
        element={<CakeDetail popupcake={popupCake} setPopupCake={setPopupCake}/>} />
        <Route path="membership-scheme"
        element={<Member />} />
        <Route path="promotion"
        element={<Promotion />} />
        <Route path="delivery-options"
        element={<Delivery />} />
        <Route path="order-form"
        element={<Order />} />
      </Routes>

      <div className="flex-grow"></div>
      <Footer />
    </main>
  );
};

export default App;
