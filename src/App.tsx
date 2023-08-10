import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Customer from './pages/customer/Customer';
import { useEffect, useState } from "react";


function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <div className="container mx-auto justify-center flex flex-col mt-12">
          <p className="text-center font-bold text-xl">Not optimized for smaller screens yet</p>
          <p className="text-center text-base mt-4">Sorry about that. Check back later</p>
        </div>
      ) : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customer" element={<Customer />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  )
}

export default App
