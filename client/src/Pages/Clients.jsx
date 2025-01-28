import ClientCard from "@/Components/ClientCard";
import ClientTable from "@/Components/ClientTable";
import { FunctionsProvider } from "@/Context/FunctionsContext";

export default function Clients() {
    return (
        <div className="text-white pt-20">
            <FunctionsProvider>
                <ClientCard />
            </FunctionsProvider>
            <div className="py-10 px-32">
                <ClientTable />
            </div>
        </div>
    );
}
