import TransactionCard from "@/Components/TransactionCard";
import TransactionsTable from "@/Components/TransactionsTable";

export default function Transactions() {
    return (
        <div className="text-white pt-20">
            <TransactionCard />
            <div className="py-10 px-32">
                <TransactionsTable />
            </div>
        </div>
    );
}
