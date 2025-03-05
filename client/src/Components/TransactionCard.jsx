import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useContext, useState } from "react";
import { FunctionsContext } from "@/Context/FunctionsContext";
import axios from "axios";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";

export default function TransactionCard() {
    const [isLoading, setIsLoading] = useState(false);
    const {
        formData,
        setFormData,
    } = useContext(FunctionsContext);

    const fields = [
        {
            label: "Client name",
            name: "name",
            type: "text",
            value: formData.name,
            description: "Client name should only contain letters and spaces",
        },
        {
            label: "Product's ID",
            name: "idp",
            type: "number",
            value: formData.idp,
            description: "Only numeric numbers are allowed",
        },
        {
            label: "Address",
            name: "address",
            type: "text",
            value: formData.address,
            description: "Enter a valid address",
        },
        {
            label: "Quantity",
            name: "quantity",
            type: "number",
            value: formData.quantity,
            description: "Only numeric numbers are allowed",
        },
    ];

    const handleClick = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { name, idp, address, quantity } = formData;

        if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            alert("Client name should only contain letters and spaces.");
            setIsLoading(false);
            return;
        }

        if (!name || !idp || !address || !quantity) {
            alert("Please fill out all fields.");
            setIsLoading(false);
            return;
        }

        axios
            .post(
                "http://localhost:8081/Pharmaceutica/AddingElement/add?tab=3",
                {
                    name,
                    idp,
                    address,
                    quantity,
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
                    <CardTitle>Make a Transaction</CardTitle>
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
            <CardFooter className="flex justify-center ">
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
