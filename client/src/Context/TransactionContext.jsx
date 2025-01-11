import { createContext } from "react";
import { useState } from "react";

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
    const [name, setclientName] = useState("");
    const [idp, setpID] = useState("");
    const [address, setaddress] = useState("");
    const [quantity, setpQuantity] = useState("");
    return (
        <TransactionContext.Provider
            value={{
                name,
                setclientName,
                idp,
                setpID,
                address,
                setaddress,
                quantity,
                setpQuantity,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

export { TransactionProvider, TransactionContext };
