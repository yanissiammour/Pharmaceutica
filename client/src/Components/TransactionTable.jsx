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

export default function TransactionsTable() {
    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8081/Pharmaceutica/transcationlist?tab=3")
            .then((res) => {
                setTransactions(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("error fetching data", err);
                setIsLoading(false);
            });
    }, []);

    const tableHeaders = [
        "Transaction ID",
        "Client Name",
        "Product Name",
        "Product Type",
        "Date",
        "Address",
        "Quantity",
        "Price",
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
                    {transactions.length > 0 ? (
                        transactions.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell className="p-2">
                                    {data.idt}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.client_name}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.product_name}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.product_type}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.formatted_date}
                                </TableCell>
                                <TableCell className="p-2">
                                    {/* {data.address}  */}Baghlia
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.quantity}
                                </TableCell>
                                <TableCell className="p-2">
                                    ${data.price}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <>
                            <p>No Transactions Found</p>
                        </>
                    )}
                </TableBody>
            </Table>
            <Link to="/transactionsLog">
                <Button variant="link" className="float-right">
                    See more
                </Button>
            </Link>
        </div>
    );
}
