import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TransactionLogTable() {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8081/Pharmaceutica/GetAllElements?tab=3"
                );
                setTransactions(res.data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTransactions();
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
        "Status",
    ];

    if (isLoading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="mx-10">
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
                                    {data.client_address}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.quantity}
                                </TableCell>
                                <TableCell className="p-2">
                                    ${data.price}
                                </TableCell>{" "}
                                <TableCell className="p-2">
                                    {/* Here should be the transaction status either "Ongoing" or "Finished" */}
                                    {data.transactionsStatus}
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
        </div>
    );
}
