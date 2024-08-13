import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-[#281c73] text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">BUSINESS REGISTRATION</h3>
          <ul className="list-disc ">
            <div className="pl-8 space-y-2">
              <li className="font-bold px-1">Pvt Ltd Company Registration</li>
              <li className="font-bold px-1">OPC Registration</li>
              <li className="font-bold px-1">LLP Registration</li>
              <li className="font-bold px-1">Partnership Registration</li>
              <li className="font-bold px-1">Startup India Registration</li>
              <li className="font-bold px-1">Nidhi Company Registration</li>
              <li className="font-bold px-1">NGO Registration</li>
            </div>
          </ul>
          <h3 className="font-bold mt-6 mb-4">GST PORTAL</h3>
          <ul className="list-disc ">
            <div className="pl-8 space-y-2">
              <li className="font-bold px-1">GST Registration</li>
              <li className="font-bold px-1">GST Return Filing</li>
            </div>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">LEGAL REGISTRATION</h3>
          <ul className="list-disc ">
            <div className="pl-8 space-y-2">
              <li className="font-bold px-1">MSME Registration</li>
              <li className="font-bold px-1">IEC Code Registration</li>
              <li className="font-bold px-1">FSSAI Registration</li>
              <li className="font-bold px-1">Shop Registration</li>
              <li className="font-bold px-1">Trademark</li>
              <li className="font-bold px-1">Patent Registration</li>
              <li className="font-bold px-1">ESI Registration</li>
              <li className="font-bold px-1">PF Registration</li>
              <li className="font-bold px-1">IRDAI Registration</li>
              <li className="font-bold px-1">ISO Certification</li>
              <li className="font-bold px-1">BIS Registration</li>
            </div>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">ANNUAL SERVICE</h3>
          <ul className="list-disc ">
            <div className="pl-8 space-y-2">
              <li className="font-bold px-1">Company Annual Filing</li>
              <li className="font-bold px-1">LLP Annual Filing</li>
              <li className="font-bold px-1">Income Tax Return</li>
              <li className="font-bold px-1">TDS Return</li>
            </div>
          </ul>
          <h3 className="font-bold mt-6 mb-4">SUPPORT</h3>
          <ul className="list-disc">
            <div className="pl-8  space-y-2">
              <li className="font-bold px-1">Term & Condition</li>
              <li className="font-bold px-1">Refund Policy</li>
              <li className="font-bold px-1">Private Policy</li>
              <li className="font-bold px-1">Contact us</li>
              <li className="font-bold px-1">Blog</li>
            </div>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">WE SECURELY ACCEPT</h3>
          <div className="flex space-x-1 mb-6">
            <img src="https://casumityadav.com/wp-content/uploads/2023/12/myonlineca-card-details_orig-300x33-1.png.webp" />
          </div>
          <h3 className="font-bold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4 mb-6">
            <SocialIcon url="https://facebook.com" />
            <SocialIcon url="https://twitter.com" />
            <SocialIcon url="https://linkedin.com" />
            <SocialIcon url="https://whatsapp.com" />
          </div>
          <p className="text-xl">8851505094</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
