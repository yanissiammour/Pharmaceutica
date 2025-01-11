import TransactionCard from "@/Components/TransactionCard";
import TransactionTable from "@/Components/TransactionTable";
import { TransactionProvider } from "@/Context/TransactionContext";

export default function Transactions() {
    return (
        <div className="text-white pt-20">
            <TransactionProvider>
                <TransactionCard />
            </TransactionProvider>

            <div className="py-10 px-32">
                <TransactionTable />
            </div>
        </div>
    );
}
