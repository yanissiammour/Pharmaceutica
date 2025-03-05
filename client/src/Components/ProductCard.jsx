import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState, useContext } from "react";
import axios from "axios";
import { FunctionsContext } from "@/Context/FunctionsContext";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";

export default function ProductCard() {
    const [isLoading, setIsLoading] = useState(false);
    const { formData, setFormData } = useContext(FunctionsContext);

    const fields = [
        {
            label: "Product Name",
            name: "productName",
            type: "text",
            value: formData.productName,
            description: "Product Name should only contain letters and spaces",
        },
        {
            label: "Quantity",
            name: "productQuantity",
            type: "number",
            value: formData.productQuantity,
            description: "Only numeric numbers are allowed",
        },
        {
            label: "Laboratory",
            name: "laboratory",
            type: "text",
            value: formData.laboratory,
            description: "Enter the Laboratory Name",
        },
        {
            label: "Product Type",
            name: "product_type",
            type: "text",
            value: formData.product_type,
            description: "Enter the type of the product",
        },
    ];

    const handleClick = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { productName, laboratory, product_type, productQuantity } =
            formData;

        if (!/^[a-zA-Z\s]+$/.test(productName)) {
            alert("Product Name should only contain letters and spaces.");
            setIsLoading(false);
            return;
        }

        if (!productName || !laboratory || !product_type || !productQuantity) {
            alert("Please fill out all fields.");
            setIsLoading(false);
            return;
        }

        axios
            .post(
                "http://localhost:8081/Pharmaceutica//AddingElement/add?tab=3",
                {
                    productName,
                    laboratory,
                    product_type,
                    productQuantity,
                }
            )
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Card className="mx-72">
            <CardHeader>
                <div className="flex justify-center align-center">
                    <CardTitle>Add a Product</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-rows-3 grid-cols-2 mt-5 gap-x-2 gap-y-10 h-60">
                        {fields.map(
                            (
                                { label, name, type, value, description },
                                index
                            ) => (
                                <div key={index} className="flex flex-col">
                                    <Label className="pb-2">{label}</Label>
                                    <Input
                                        name={name}
                                        placeholder={`Enter the ${label}`}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                [name]: e.target.value,
                                            }))
                                        }
                                        value={value}
                                        type={type}
                                    />
                                    <CardDescription className="mt-2">
                                        {description}.
                                    </CardDescription>
                                </div>
                            )
                        )}
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                {isLoading ? (
                    <Button disabled className="w-72">
                        <Loader2 className="animate-spin" />
                        <span>Please wait</span>
                    </Button>
                ) : (
                    <Button className="w-72" onClick={handleClick}>
                        Register
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
