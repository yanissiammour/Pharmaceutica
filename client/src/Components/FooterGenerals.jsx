import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function FooterGenerals() {
    const pages = [
        { content: "About Us", link: "/aboutUs" },
        { content: "Contact Us", link: "/contactUs" },
        { content: "Get Started", link: "/products" },
    ];

    return (
        <div className="w-72 flex justify-center items-center flex-col border-l pt-10">
            <h3 className="pb-10 scroll-m-20 text-xl font-semibold tracking-tight">
                General
            </h3>
            <div className="flex flex-col gap-10 text-center">
                {pages.map((page, index) => (
                    <Link key={index} to={page.link}>
                        <Button variant="link">{page.content}</Button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
