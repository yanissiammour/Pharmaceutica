import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
    return (
        <div className="bg-white pt-5 flex justify-between ">
            <h3 className="scroll-m-20 text-sm font-extrabold tracking-tight lg:text-4xl pl-5">
                Pharmaceutica
            </h3>
            <NavbarMenu />
        </div>
    );
}
