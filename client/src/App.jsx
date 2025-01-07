import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Transactions from "./Pages/Transactions";
import Clients from "./Pages/Clients";
import Products from "./Pages/Products";
import TransactionsLog from "./Pages/TransactionsLog";
import ClientsLog from "./Pages/ClientsLog";
import ProductsLog from "./Pages/ProductsLog";
import { useState } from "react";

function App() {
    const [name, setclientName] = useState("");
    const [idp, setpID] = useState("");
    const [address, setaddress] = useState("");
    const [quantity, setpQuantity] = useState("");

    return (
        <BrowserRouter className="m-0 p-0 border-box h-screen hide-scrollbar">
            <Navbar />
            <div className="mt-6 bg-customBackground h-full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/transactions"
                        element={
                            <Transactions
                                name={name}
                                setclientName={setclientName}
                                idp={idp}
                                setpID={setpID}
                                address={address}
                                setaddress={setaddress}
                                quantity={quantity}
                                setpQuantity={setpQuantity}
                            />
                        }
                    />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/clientsLog" element={<ClientsLog />} />
                    <Route path="/productsLog" element={<ProductsLog />} />
                    <Route
                        path="/transactionsLog"
                        element={<TransactionsLog />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
