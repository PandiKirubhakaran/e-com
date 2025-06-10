import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { MessageLabels, UILable } from "@/constants/enums";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            {UILable.ABOUT_US}
          </h3>
          <p className="text-sm leading-relaxed">
            {MessageLabels.FOOTER_ABTUS}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#ca9618] transition-colors">
                {UILable.Home}
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-[#ca9618] transition-colors"
              >
                {UILable.PRODUCTS}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#ca9618]" />
              <span>ThousandLights,Chennai</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#ca9618]" />
              <a href="tel:+91 9345001738" className="hover:text-[#ca9618]">
                +91 9345001738
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#ca9618]" />
              <a
                href="mailto:pandikirubhakarane@gmail.com"
                className="hover:text-[#ca9618]"
              >
                pandikirubhakarane@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#ca9618] transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#ca9618] transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#ca9618] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#ca9618] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} {MessageLabels.FOOTER_RIGHTS}
      </div>
    </footer>
  );
};

export default Footer;
