import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Transactions from "./Pages/Transactions";
import Clients from "./Pages/Clients";
import Products from "./Pages/Products";

function App() {
    return (
        <BrowserRouter className="m-0 p-0 border-box h-screen hide-scrollbar">
            <Navbar />
            <div className="mt-6 bg-customBackground h-full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
