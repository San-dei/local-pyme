import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Products } from "./pages/Products";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";
import { Cart } from "./components/cart/Cart";
import { DataProvider } from "./context/DataProvider";
import { FailureMP } from "./pages/FailureMP";
import { SuccesMP } from "./pages/SuccesMP";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { ProductsDetails } from "./pages/ProductsDetails";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Products" element={<Products />} />
            <Route path="/ProductsDetails/:id" element={<ProductsDetails/>} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Failure" element={<FailureMP />} />
            <Route path="/Succes" element={<SuccesMP />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </DataProvider> 
    </>
  );
}

export default App;
