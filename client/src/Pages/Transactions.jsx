import RegisterCard from "@/Components/RegisterCard";
import TransactionTable from "@/Components/TransactionTable";

export default function Transactions() {
    return (
        <div className="text-white pt-20">
            <RegisterCard />
            <div className="py-10 px-32">
                <TransactionTable />
            </div>
        </div>
    );
}
