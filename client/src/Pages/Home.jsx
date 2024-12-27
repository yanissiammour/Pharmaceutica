import HomeHero from "@/Components/HomeHero";
import Sponsors from "@/Components/Sponsors";

export default function Home() {
    return (
        <div className="scroll-smooth">
            <div>
                <HomeHero />
                <Sponsors />
            </div>
        </div>
    );
}
