import { createContext } from "react";
import { useState } from "react";

const FunctionsContext = createContext();

const FunctionsProvider = ({ children }) => {
    const [name, setclientName] = useState("");
    const [idp, setpID] = useState("");
    const [address, setaddress] = useState("");
    const [quantity, setpQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");

    return (
        <FunctionsContext.Provider
            value={{
                name,
                setclientName,
                idp,
                setpID,
                address,
                setaddress,
                quantity,
                setpQuantity,
                category,
                setCategory,
                phoneNum,
                setPhoneNum,
                email,
                setEmail,
            }}
        >
            {children}
        </FunctionsContext.Provider>
    );
};

export { FunctionsProvider, FunctionsContext };
