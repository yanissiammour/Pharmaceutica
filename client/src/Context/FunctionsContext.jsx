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
    const [productName, setProductName] = useState("");
    const [laboratory, setLaboratory] = useState("");
    const [product_type, setProduct_type] = useState("");
    const [productQuantity, setProductQuantity] = useState("");

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
                productName,
                setProductName,
                laboratory,
                setLaboratory,
                productQuantity,
                setProductQuantity,
                product_type,
                setProduct_type,
            }}
        >
            {children}
        </FunctionsContext.Provider>
    );
};

export { FunctionsProvider, FunctionsContext };
