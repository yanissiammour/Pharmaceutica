import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function NavbarMenu({ location }) {
    const menuItems = [
        {
            title: "Transactions",
            links: [
                { label: "Add a new transaction", href: "#" },
                { label: "Access transactions' log", href: "#" },
            ],
        },
        {
            title: "Products",
            links: [
                { label: "Add a new product", href: "#" },
                { label: "Access products' log", href: "#" },
            ],
        },
        {
            title: "Clients",
            links: [
                { label: "Add a new client", href: "#" },
                { label: "Access clients' log", href: "#" },
            ],
        },
    ];

    return (
        <div className="float-right align-center">
            {location.pathname !== "/" ? (
                <>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {menuItems.map((menu, index) => (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuTrigger>
                                        {menu.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className=" w-56 h-auto">
                                            {menu.links.map((link, index) => (
                                                <li
                                                    key={index}
                                                    className="hover:bg-gray-200 rounded transition duration-150"
                                                >
                                                    <a
                                                        href={link.href}
                                                        className="block px-4 py-2 w-full text-left text-gray-700 hover:text-gray-900"
                                                    >
                                                        {link.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </>
            ) : (
                <div className="mr-3">
                    <Button variant="link">About Us</Button>
                    <Button variant="link">Contact Us</Button>
                    <Button>Get Started</Button>
                </div>
            )}
        </div>
    );
}
