import FooterGenerals from "./FooterGenerals";

import FooterLogos from "./FooterLogos";

export default function Footer() {
    return (
        <div>
            <div className="flex mt-20 h-96 bg-white justify-between">
                <FooterLogos />
                <FooterGenerals />
            </div>
            <div className="bg-black h-10 text-white flex justify-center items-center">
                © Pharmaceutica, 2024. All rights reserved.
            </div>
        </div>
    );
}
