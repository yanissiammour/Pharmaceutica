import axios from "axios";
import { Button } from "@/components/ui/button";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductTable() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8081/Pharmaceutica/GetAllElements?tab=3")
            .then((res) => {
                setProducts(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("error fetching data", err);
                setIsLoading(false);
            });
    }, []);

    const tableHeaders = [
        "Product ID",
        "Product Name",
        "Product Type",
        "Quantity",
        "Laboratory",
    ];

    if (isLoading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div>
            <Table className="border-collapse bg-white text-black rounded-lg">
                <TableHeader>
                    <TableRow>
                        {tableHeaders.map((header, index) => (
                            <TableHead key={index} className="p-2 text-left">
                                {header}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.length > 0 ? (
                        products.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell className="p-2">
                                    {data.productID}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.product_name}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.product_type}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.quantity}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.laboratory}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <>
                            <p>No Products Found</p>
                        </>
                    )}
                </TableBody>
            </Table>
            <Link to="/productsLog">
                <Button variant="link" className="float-right">
                    See more
                </Button>
            </Link>
        </div>
    );
}
