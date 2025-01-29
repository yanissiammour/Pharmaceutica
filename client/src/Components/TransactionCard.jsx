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
        name,
        setclientName,
        idp,
        setpID,
        address,
        setaddress,
        quantity,
        setpQuantity,
    } = useContext(FunctionsContext);

    const fields = [
        {
            label: "Client name",
            id: "name",
            type: "text",
            value: name,
            setValue: setclientName,
            description: "Client name should only contain letters and spaces",
        },
        {
            label: "Product's ID",
            id: "productID",
            type: "number",
            value: idp,
            setValue: setpID,
            description: "Only numeric numbers are allowed",
        },
        {
            label: "Address",
            id: "address",
            type: "text",
            value: address,
            setValue: setaddress,
            description: "Enter a valid address",
        },
        {
            label: "Quantity",
            id: "quantity",
            type: "number",
            value: quantity,
            setValue: setpQuantity,
            description: "Only numeric numbers are allowed",
        },
    ];

    const handleClick = (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!/^[a-zA-Z\s]+$/.test(name)) {
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
