import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TransactionSearch() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="text"
                placeholder="What are you searching for ?"
                className="bg-white"
            />
            <Button type="submit">Search</Button>
        </div>
    );
}
