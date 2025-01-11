import discordLogo from "./images/discord-brands-solid.svg";
import githubLogo from "./images/github-brands-solid.svg";
import linkedinLogo from "./images/linkedin-brands-solid.svg";
import xTwitterLogo from "./images/x-twitter-brands-solid.svg";
import facebookLogo from "./images/facebook-brands-solid.svg";

export default function FooterLogos() {
    const logos = [
        { src: discordLogo, alt: "Discord" },
        { src: githubLogo, alt: "GitHub" },
        { src: linkedinLogo, alt: "LinkedIn" },
        { src: facebookLogo, alt: "Facebook" },
        { src: xTwitterLogo, alt: "X/Twitter" },
    ];

    return (
        <div className="pl-96 pt-16 h-48 w-72 flex flex-col justify-center items-center text-left">
            <div>
                <h3 className="scroll-m-20 font-extrabold tracking-light lg:text-4xl">
                    Pharmaceutica
                </h3>
                <p className="w-96">Laboratory Operations Management System</p>
            </div>

            <div className="flex gap-2 justify-end pr-8">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-auto w-12"
                    />
                ))}
            </div>
        </div>
    );
}
