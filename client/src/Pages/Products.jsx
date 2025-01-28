import ProductCard from "@/Components/ProductCard";
import ProductTable from "@/Components/ProductTable";
import { FunctionsProvider } from "@/Context/FunctionsContext";

export default function Products() {
    return (
        <div className="text-white pt-20">
            <FunctionsProvider>
                <ProductCard />
            </FunctionsProvider>
            <div className="py-10 px-32">
                <ProductTable />
            </div>
        </div>
    );
}
