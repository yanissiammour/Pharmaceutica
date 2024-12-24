import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function TransactionCard() {
    const [isLoading, setIsLoading] = useState(false);
    function handleClick() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
                            <Label className="pb-2">Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter the client's name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label className="pb-2">Product's ID</Label>
                            <Input
                                id="productID"
                                placeholder="Enter the product's ID"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label className="pb-2">Address</Label>
                            <Input
                                id="address"
                                placeholder="Address of the client"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label className="pb-2">Quantity</Label>
                            <Input
                                id="quantity"
                                placeholder="Enter the quantity"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Label className="pb-2">Product</Label>
                            <Input
                                id="product"
                                placeholder="Enter the product's name"
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
