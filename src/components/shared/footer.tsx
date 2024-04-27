// import { institusi, about, help, product } from "@/constants/footer-items";
// import FooterItem from "./footer-item";

import { profile as profiles } from "@/constants/profile-company";

const Footer = () => {
  return (
    <div className="bg-white text-black z-50 h-5">
      <div className="wrapper flexCol">
        <div className="flex-center flex-col md:flex-row md:flex-end gap-5 md:gap-10 py-1 px-4">
          {profiles.address.map((address) => (
            <div className="lg:whitespace-pre-line flex-center md:w-1/2">
              {address}
            </div>
          ))}
          <div className="flex-center text-gray-400 text-xs">
            © 2024 SCOLA, All Rights Reserved
          </div>

          {/* <FooterItem label="Institusi" items={institusi} />
          <FooterItem label="SCOLA" items={about} />
          <FooterItem label="Bantuan" items={help} />
          <FooterItem label="Poduk Kami" items={product} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
