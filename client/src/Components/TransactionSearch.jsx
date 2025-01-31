import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpShortWide,
    faArrowDownWideShort,
} from "@fortawesome/free-solid-svg-icons";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function TransactionSearch() {
    const [isAsending, setisAsending] = useState(true);
    const [loading, setLoading] = useState(false);
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
                type="text"
                placeholder="What are you searching for ?"
                className="bg-white"
            />
            <Button type="submit" onClick={() => setLoading(!loading)}>
                {loading ? <Loader2 className="animate-spin" /> : "Search"}
            </Button>
            <Button onClick={() => setisAsending(!isAsending)}>
                <FontAwesomeIcon
                    icon={
                        isAsending ? faArrowUpShortWide : faArrowDownWideShort
                    }
                />
            </Button>
        </div>
    );
}
