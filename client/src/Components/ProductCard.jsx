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
    const {
        productName,
        productQuantity,
        product_type,
        laboratory,
        setProductName,
        setLaboratory,
        setProductQuantity,
        setProduct_type,
    } = useContext(FunctionsContext);

    const fields = [
        {
            label: "Product Name",
            id: "product",
            type: "text",
            value: productName,
            setValue: setProductName,
            description: "Product Name should only contain letters and spaces",
        },
        {
            label: "Quantity",
            id: "productQuantity",
            type: "number",
            value: productQuantity,
            setValue: setProductQuantity,
            description: "Only numeric numbers are allowed",
        },
        {
            label: "Laboratory",
            id: "laboratory",
            type: "text",
            value: laboratory,
            setValue: setLaboratory,
            description: "Enter the Laboratory Name",
        },
        {
            label: "Product Type",
            id: "product",
            type: "text",
            value: product_type,
            setValue: setProduct_type,
            description: "Enter the type of the product",
        },
    ];

    const handleClick = (e) => {
        e.preventDefault();
        setIsLoading(true);

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
                                {
                                    label,
                                    id,
                                    type,
                                    value,
                                    setValue,
                                    description,
                                },
                                index
                            ) => (
                                <div index={index} className="flex flex-col">
                                    <Label className="pb-2">{label}</Label>
                                    <Input
                                        id={id}
                                        placeholder={`Enter the ${label}`}
                                        onChange={(e) =>
                                            setValue(e.target.value)
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
