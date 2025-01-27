import TransactionCard from "@/Components/TransactionCard";
import TransactionTable from "@/Components/TransactionTable";
import { FunctionsProvider } from "@/Context/FunctionsContext";

export default function Transactions() {
    return (
        <div className="text-white pt-20">
            <FunctionsProvider>
                <TransactionCard />
            </FunctionsProvider>

            <div className="py-10 px-32">
                <TransactionTable />
            </div>
        </div>
    );
}
