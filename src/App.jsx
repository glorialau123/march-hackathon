import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </div>;
}

export default App;
