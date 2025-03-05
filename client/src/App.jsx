import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Transactions from "./Pages/Transactions";
import Clients from "./Pages/Clients";
import Products from "./Pages/Products";
import TransactionsLog from "./Pages/TransactionsLog";
import ClientsLog from "./Pages/ClientsLog";
import ProductsLog from "./Pages/ProductsLog";

function App() {
    return (
        <div className="m-0 p-0 border-box hide-scrollbar">
            <Navbar />
            <div className="mt-6 bg-customBackground h-full">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/transactions" element={<Transactions />} />
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
        </div>
    );
}

export default App;
