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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ClientCard() {
    const [isLoading, setIsLoading] = useState(false);
    const { formData, setFormData } = useContext(FunctionsContext);

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
            label: "Phone Number",
            name: "phoneNum",
            type: "number",
            value: formData.phoneNum,
            description: "Enter the phone number of the client",
        },
        {
            label: "Email",
            name: "email",
            type: "text",
            value: formData.email,
            description: "Enter a valid email address",
        },
    ];

    const handleClick = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { name, idp, address, category, phoneNum, email } = formData;

        if (!/^[a-zA-Z\s]+$/.test(name)) {
            alert("Client name should only contain letters and spaces.");
            setIsLoading(false);
            return;
        }

        if (!name || !idp || !address || !category || !phoneNum || !email) {
            alert("Please fill out all fields.");
            setIsLoading(false);
            return;
        }

        axios
            .post(
                "http://localhost:8081/Pharmaceutica//AddingElement/add?tab=3",
                {
                    name,
                    idp,
                    address,
                    category,
                    email,
                    phoneNum,
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
                    <CardTitle>Add a Client</CardTitle>
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
                        <Select
                            onValueChange={(value) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    category: value,
                                }))
                            }
                        >
                            <SelectTrigger className="max-w-3xs mt-5 max-h-[2rem]">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="individual">
                                    Individual
                                </SelectItem>
                                <SelectItem value="company">Company</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center mt-14">
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
