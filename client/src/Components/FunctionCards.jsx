import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TransactionSvg from "@/Components/images/undraw_order-delivered_puaw.svg";
import ProductsSvg from "@/Components/images/undraw_logistics_xpdj.svg";
import ClientsSvg1 from "@/Components/images/undraw_people-search_xpq4.svg";
import ClientsSvg2 from "@/Components/images/undraw_conference-call_ccsp.svg";

export default function FunctionCards() {
    const cards = [
        {
            title: "Client-Centric Lab Management System",
            titleClass: "scroll-m-20 font-extrabold tracking-light lg:text-4xl",
            secondDivClass: "px-12 text-center",
            description:
                "Centralized database to catalog all products used or offered by the laboratory.",
            buttonText: "Add a Client",
            cardContentClass: "pt-44 pb-8",
            images: [
                {
                    src: ClientsSvg1,
                    class: "absolute bottom-0 right-0 w-60 h-auto pl-10",
                },
                {
                    src: ClientsSvg2,
                    class: "absolute bottom-16 left-0 w-72 h-auto pl-10",
                },
            ],
            cardClass: "relative overflow-hidden pt-16 h-[27rem]",
            cardLink: "/clients",
        },
        {
            titleClass:
                "scroll-m-20 font-extrabold tracking-light lg:text-4xl text-left",
            title: (
                <>
                    Lab Records <br />
                    and Inventory <br /> Tracker
                </>
            ),
            descriptionClass: "w-48",
            description:
                "Centralized database to catalog all products used or offered by the laboratory.",
            secondDivClass: "px-12 float-right",
            cardContentClass: "pt-10 pb-8",
            buttonText: "Add a Product",
            image: ProductsSvg,
            imageClass: "absolute bottom-0 left-0 w-[35em] h-auto pl-10",
            cardClass: "relative overflow-hidden pt-16",
            cardLink: "/products",
        },
        {
            titleClass:
                "scroll-m-20 font-extrabold tracking-light lg:text-4xl text-left",
            title: (
                <>
                    Centralized <br />
                    Lab <br />
                    Transactions
                </>
            ),
            secondDivClass: "px-12",
            description:
                "A feature to record and store detailed information about every transaction processed in the laboratory.",
            descriptionClass: "w-48",
            buttonText: "Make a Transaction",
            image: TransactionSvg,
            imageClass: "absolute bottom-0 right-0 w-96 h-auto",
            cardClass: "relative overflow-hidden pt-16",
            cardContentClass: "pt-10 pb-8",
            cardLink: "/transactions",
        },
    ];

    return (
        <div>
            {cards.map((card, index) => (
                <div key={index} className="mx-60 mt-20">
                    <Card className={card.cardClass}>
                        <div className={card.secondDivClass}>
                            <CardHeader>
                                <h3 className={card.titleClass}>
                                    {card.title}
                                </h3>
                                <CardDescription
                                    className={card.descriptionClass}
                                >
                                    {card.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className={card.cardContentClass}>
                                <Link to={card.cardLink}>
                                    <Button>{card.buttonText}</Button>
                                </Link>
                            </CardContent>
                        </div>
                        {card.image && (
                            <img
                                src={card.image}
                                alt=""
                                className={card.imageClass}
                            />
                        )}
                        {card.images &&
                            card.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img.src}
                                    alt=""
                                    className={img.class}
                                />
                            ))}
                    </Card>
                </div>
            ))}
        </div>
    );
}
