import TransactionLogTable from "@/Components/TransactionLogTable";
import TransactionSearch from "@/Components/TransactionSearch";

export default function TransactionsLog() {
    return (
        <div className="h-screen">
            <h2 className="pt-10 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
                Transaction Log
            </h2>
            <div className="my-5 flex justify-center items-center">
                <TransactionSearch />
            </div>
            <div>
                <TransactionLogTable />
            </div>
        </div>
    );
}
