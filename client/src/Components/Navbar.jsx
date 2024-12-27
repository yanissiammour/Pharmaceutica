import NavbarMenu from "./NavbarMenu";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <div className="bg-white pt-5 flex justify-between ">
            <h3 className="scroll-m-20 text-sm font-extrabold tracking-tight lg:text-4xl pl-5">
                <Link to="/">
                    <a href=""> Pharmaceutica</a>
                </Link>
            </h3>
            <div className="pr-2">
                <NavbarMenu location={location} />
            </div>
        </div>
    );
}
