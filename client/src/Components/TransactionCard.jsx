import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function TransactionCard() {
    const [isLoading, setIsLoading] = useState(false);

    const [name, setclientName] = useState("");
    const [idp, setpID] = useState("");
    const [address, setaddress] = useState("");
    const [quantity, setpQuantity] = useState("");

    /*function handleClick() {


        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }*/

    function handleClick() {
        event.preventDefault();
        axios
            .post("http://localhost:8081/Pharmaceutica/productlist/add?tab=3", {
                name,
                idp,
                address,
                quantity,
            })
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => console.log(err));
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        window.location.reload();
    }

    return (
        <Card className="mx-60">
            <CardHeader>
                <div className="flex justify-center align-center">
                    <CardTitle>Make a Transaction</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-rows-3 grid-cols-2 my-5 gap-x-2 gap-y-10">
                        <div className="flex flex-col">
                            <Label className="pb-2">Client name</Label>
                            <Input
                                id="name"
                                placeholder="Enter the client's name"
                                onChange={(e) => setclientName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label className="pb-2">Product's ID</Label>
                            <Input
                                id="productID"
                                placeholder="Enter the product's ID"
                                onChange={(e) => setpID(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label className="pb-2">Address</Label>
                            <Input
                                id="address"
                                placeholder="Address of the client"
                                onChange={(e) => setaddress(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label className="pb-2">Quantity</Label>
                            <Input
                                id="quantity"
                                placeholder="Enter the quantity"
                                onChange={(e) => setpQuantity(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center mt-2">
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
