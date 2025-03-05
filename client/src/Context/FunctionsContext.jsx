import { createContext } from "react";
import { useState } from "react";

const FunctionsContext = createContext();

const FunctionsProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: "",
        idp: "",
        address: "",
        quantity: "",
        category: "",
        phoneNum: "",
        email: "",
        productName: "",
        laboratory: "",
        product_type: "",
        productQuantity: "",
    });

    return (
        <FunctionsContext.Provider
            value={{
                formData,
                setFormData
            }}
        >
            {children}
        </FunctionsContext.Provider>
    );
};

export { FunctionsProvider, FunctionsContext };
