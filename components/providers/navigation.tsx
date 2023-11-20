"use client";
import { useMenuStore } from "@/lib/store/navigation";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet";
import { Icons } from "../icons";
import Link from "next/link";
import { navItems } from "@/lib/constant";

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const isNavOpened = useMenuStore((state) => state.isOpen);
  const toggle = useMenuStore((state) => state.toggleMenu);

  return (
    <>
      <Sheet open={isNavOpened}>
        <SheetContent
          side={"left"}
          onOverlayClick={toggle}
          onCloseClick={toggle}
          className="px-4 py-5 overflow-y-scroll"
        >
          <SheetHeader>
            <Icons.GoDaddy className="w-36 xl:w-44 h-auto" />
          </SheetHeader>
          <div className="mt-12">
            <ul className="space-y-12">
              {navItems.left.map(({ href, label }) => (
                <li className="inline-block w-full group" key={label}>
                  <Link
                    href={href}
                    className="inline-flex items-center w-full justify-between py-2 font-medium rounded-md xl:text-xl"
                  >
                    <span className="">{label}</span>
                    <Icons.ArrowRight className="w-5 h-5 mr-4 group-hover:mr-2 transition-all duration-150 ease-linear" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <SheetFooter className="absolute bottom-0 inset-x-0 w-full">
            <ul className="w-full px-4">
              <li className="inline-block w-full py-1.5">
                <Link href="#" className="inline-flex space-x-2 items-center">
                  <Icons.Help className="w-6 h-6" />
                  <span className="font-semibold text-brand-charcoal">
                    Help Centre
                  </span>
                </Link>
              </li>
              <li className="inline-block w-full py-1.5">
                <Link href="#" className="inline-flex space-x-2 items-center">
                  <Icons.User className="w-6 h-6" />
                  <span className="font-semibold text-brand-charcoal">
                    Account
                  </span>
                </Link>
              </li>
              <li className="inline-block w-full py-1.5">
                <Link href="#" className="inline-flex space-x-2 items-center">
                  <Icons.Basket className="w-6 h-6" />
                  <span className="font-semibold text-brand-charcoal">
                    Basket
                  </span>
                </Link>
              </li>
            </ul>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      {children}
    </>
  );
};

export default NavigationProvider;
