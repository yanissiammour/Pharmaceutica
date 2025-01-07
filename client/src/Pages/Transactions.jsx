import TransactionCard from "@/Components/TransactionCard";
import TransactionTable from "@/Components/TransactionTable";

export default function Transactions({
    name,
    setclientName,
    idp,
    setpID,
    address,
    setaddress,
    quantity,
    setpQuantity,
}) {
    return (
        <div className="text-white pt-20">
            <TransactionCard
                name={name}
                setclientName={setclientName}
                idp={idp}
                setpID={setpID}
                address={address}
                setaddress={setaddress}
                quantity={quantity}
                setpQuantity={setpQuantity}
            />
            <div className="py-10 px-32">
                <TransactionTable />
            </div>
        </div>
    );
}
