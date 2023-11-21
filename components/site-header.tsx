import Link from "next/link";
import React from "react";
import { Icons } from "@/components/icons";
import MenuToggle from "./menu-toggle";
import { navItems } from "@/lib/constant";

export const SiteHeader = () => {
  return (
    <header className="bg-brand-charcoal-light text-white min-h-[4rem] flex items-center justify-center">
      <nav className="mx-auto px-[4vw] w-full flex justify-between items-center">
        <div className="space-x-6 flex items-center">
          <div className="flex items-center space-x-4">
            <MenuToggle/>
            <Link
              href="/"
              className="inline-flex h-6 w-36 text-white  fill-white relative flex-col"
            >
              <Icons.GoDaddy className="shrink-0" />
              <span className="sr-only">GoDaddy Logo</span>
              <span className="text-3xs hidden md:inline-block ml-auto absolute- right-0-- font-semibold end-1">
                India
              </span>
            </Link>
          </div>
          <ul className="space-x-2 hidden xl:block">
            {navItems.left.map(({ label, href }) => (
              <li key={label} className="inline-block">
                <Link
                  href={href}
                  className="text-white px-2.5 py-2 hover:bg-white/20 transition-colors duration-300 ease-in-out rounded-lg font-bold md:text-lg"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="space-x-2 xl:space-x-6 flex items-center">
            <li className="inline-block">
              <Link
                href={"#"}
                className="text-white px-2.5 py-2 hover:bg-white/20  inline-flex items-center justify-center space-x-1 transition-colors duration-300 ease-in-out rounded-lg font-normal text-sm"
              >
                <span className="sr-only">Call GoDaddy 040-67607600</span>
                <Icons.Phone className="w-5 h-5 fill-white xl:hidden" />
                <span className="hidden xl:inline-block">040-67607600</span>
                <Icons.ChevronDown className="hidden xl:block w-5 h-5 fill-white" />
              </Link>
            </li>
            <li className="inline-block">
              <Link
                href={"#"}
                className="text-white px-2.5 py-2 hover:bg-white/20 transition-colors duration-300 ease-in-out rounded-lg font-bold text-sm inline-flex items-center justify-center space-x-1"
              >
                <Icons.Help className="w-5 h-5 fill-white xl:hidden" />
                <span className="sr-only">GoDaddy Help</span>
                <span className="hidden xl:inline-block">Help</span>
              </Link>
            </li>
            <li className="inline-block">
              <Link
                href={"#"}
                className="text-white px-2.5 py-2 hover:bg-white/20 transition-colors duration-300 ease-in-out rounded-lg font-bold text-sm inline-flex items-center justify-center"
              >
                <Icons.User className="w-5 h-5 fill-white xl:hidden" />
                <span className="sr-only">Call GoDaddy 040-67607600</span>
                <span className="hidden xl:inline-block">Sign In</span>
                <Icons.ChevronDown className="hidden xl:inline-block w-5 h-5 fill-white" />
              </Link>
            </li>
            <li className="inline-block">
              <Link
                href={"#"}
                className="text-white h-10 w-10 inline-grid place-items-center hover:bg-white/20 transition-colors duration-300 ease-in-out rounded-lg font-bold md:text-lg"
              >
                <Icons.Basket className="w-5 h-5 fill-white" />
                <span className="sr-only">0 items in your cart. View Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
