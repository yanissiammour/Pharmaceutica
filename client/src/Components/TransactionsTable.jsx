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

export default function TransactionsTable() {
    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8081/inventaire")
            .then((res) => {
                setTransactions(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("error fetching data", err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Table className="border-collapse">
            <TableHeader>
                <TableRow>
                    <TableHead className="p-2 text-left">
                        Transaction's ID
                    </TableHead>
                    <TableHead className="p-2 text-left">
                        Client's Name
                    </TableHead>
                    <TableHead className="p-2 text-left">
                        Product's Name
                    </TableHead>
                    <TableHead className="p-2 text-left">Date</TableHead>
                    <TableHead className="p-2 text-left">Quantity</TableHead>
                    <TableHead className="p-2 text-left">Price</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactions.length > 0 ? (
                    transactions.map((transaction, index) => (
                        <TableRow key={index}>
                            <TableCell className="p-2 font-medium">
                                {transaction.id}
                            </TableCell>
                            <TableCell className="p-2">
                                {transaction.clientName}
                            </TableCell>
                            <TableCell className="p-2">
                                {transaction.productName}
                            </TableCell>
                            <TableCell className="p-2 text-left">
                                {transaction.date}
                            </TableCell>
                            <TableCell className="p-2 text-left">
                                {transaction.quantity}
                            </TableCell>
                            <TableCell className="p-2 text-left">
                                ${transaction.price}
                            </TableCell>
                        </TableRow>
                    ))
                ) : (
                    <>
                        <TableRow>
                            <TableCell className="p-2 font-medium">
                                INV001
                            </TableCell>
                            <TableCell className="p-2">Carlos Pablo</TableCell>
                            <TableCell className="p-2">Gadget X</TableCell>
                            <TableCell className="p-2 text-left">
                                2024-12-21
                            </TableCell>
                            <TableCell className="p-2 text-left">2</TableCell>
                            <TableCell className="p-2 text-left">
                                $500.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="p-2 font-medium">
                                INV001
                            </TableCell>
                            <TableCell className="p-2">Carlos Pablo</TableCell>
                            <TableCell className="p-2">Gadget X</TableCell>
                            <TableCell className="p-2 text-left">
                                2024-12-21
                            </TableCell>
                            <TableCell className="p-2 text-left">2</TableCell>
                            <TableCell className="p-2 text-left">
                                $500.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="p-2 font-medium">
                                INV001
                            </TableCell>
                            <TableCell className="p-2">Carlos Pablo</TableCell>
                            <TableCell className="p-2">Gadget X</TableCell>
                            <TableCell className="p-2 text-left">
                                2024-12-21
                            </TableCell>
                            <TableCell className="p-2 text-left">2</TableCell>
                            <TableCell className="p-2 text-left">
                                $500.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="p-2 font-medium">
                                INV001
                            </TableCell>
                            <TableCell className="p-2">Carlos Pablo</TableCell>
                            <TableCell className="p-2">Gadget X</TableCell>
                            <TableCell className="p-2 text-left">
                                2024-12-21
                            </TableCell>
                            <TableCell className="p-2 text-left">2</TableCell>
                            <TableCell className="p-2 text-left">
                                $500.00
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="p-2 font-medium">
                                INV001
                            </TableCell>
                            <TableCell className="p-2">Carlos Pablo</TableCell>
                            <TableCell className="p-2">Gadget X</TableCell>
                            <TableCell className="p-2 text-left">
                                2024-12-21
                            </TableCell>
                            <TableCell className="p-2 text-left">2</TableCell>
                            <TableCell className="p-2 text-left">
                                $500.00
                            </TableCell>
                        </TableRow>
                    </>
                )}
            </TableBody>
        </Table>
    );
}
