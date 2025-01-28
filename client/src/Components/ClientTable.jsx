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
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8081/Pharmaceutica/GetAllElements?tab=3")
            .then((res) => {
                setClients(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("error fetching data", err);
                setIsLoading(false);
            });
    }, []);

    const tableHeaders = [
        "Client ID",
        "Client Name",
        "Category",
        "Address",
        "Phone Number",
        "Email",
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
                    {clients.length > 0 ? (
                        clients.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell className="p-2">
                                    {data.idt || "N/A"}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.client_name || "N/A"}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.category || "N/A"}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.address}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.phoneNum || "N/A"}
                                </TableCell>
                                <TableCell className="p-2">
                                    {data.email || "N/A"}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <>
                            <p>No Clients Found</p>
                        </>
                    )}
                </TableBody>
            </Table>
            <Link to="/clientsLog">
                <Button variant="link" className="float-right">
                    See more
                </Button>
            </Link>
        </div>
    );
}
