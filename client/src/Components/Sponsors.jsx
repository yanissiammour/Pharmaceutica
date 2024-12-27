import BrookhavenLab from "./images/BrookhavenLab.svg";
import Logo2 from "./images/Logo2.svg";
import Logo3 from "./images/Logo3.svg";
import Logo4 from "./images/Logo4.svg";
import Logo5 from "./images/Logo5.svg";
import Logo6 from "./images/Logo6.svg";
import Logo7 from "./images/Logo7.svg";

export default function Sponsors() {
    return (
        <div className="bg-customSponsorBackground overflow-hidden">
            <div className="flex animate-scroll space-x-8">
                <img src={BrookhavenLab} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" className="mix-blend-darken" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" className="mix-blend-darken" />
                <img src={Logo6} alt="" />
                <img src={Logo7} alt="" />
            </div>
        </div>
    );
}
