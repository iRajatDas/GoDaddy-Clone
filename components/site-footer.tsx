"use client";
import { footerNav } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Icons } from "./icons";

const animationVariants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
        delay: 0.15,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
};

export const SiteFooter = () => {
  const [sectionVisibility, setSectionVisibility] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (section: string) => {
    setSectionVisibility((prevVisibility) => {
      const newVisibility = { [section]: !prevVisibility[section] || false };

      // Close all other sections
      Object.keys(prevVisibility).forEach((key) => {
        if (key !== section) {
          newVisibility[key] = false;
        }
      });

      return newVisibility;
    });
  };

  const isSmallScreen = useMediaQuery("sm");

  return (
    <LayoutGroup>
      <footer className="bg-brand-charcoal text-white">
        <section className="px-[4vw] py-[4vh] mx-auto w-full">
          <ul className="flex flex-wrap justify-between gap-y-6 sm:gap-y-12">
            {Object.entries(footerNav).map(([section, items], index) => (
              <li
                key={section}
                tabIndex={index}
                className="space-y-2 w-full sm:w-1/2 lg:w-fit"
              >
                <div
                  className="text-lg font-bold flex items-center justify-between cursor-pointer sm:cursor-auto"
                  onClick={() => isSmallScreen && toggleSection(section)}
                >
                  {/* {section} */}
                  <span className="capitalize">
                    {section === "aboutGoDaddy"
                      ? "About GoDaddy"
                      : section
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                  </span>
                  <span className="inline place-items-center sm:hidden">
                    {sectionVisibility[section] ? (
                      <Minus className="inline" size={16} />
                    ) : (
                      <Plus className="inline" size={16} />
                    )}
                  </span>
                </div>
                <AnimatePresence initial={false} mode="wait">
                  {!isSmallScreen || sectionVisibility[section] ? (
                    <motion.ul
                      key={section}
                      variants={animationVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className={cn(
                        `space-y-3 `,
                        sectionVisibility[section] ? "" : "hidden sm:block"
                      )}
                    >
                      {items.map((item, index) => (
                        <li key={index} className="px-[0.5%]">
                          <Link
                            href={item.href}
                            className="text-2xs font-medium text-brand-gray hover:underline min-w-[unset]"
                          >
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  ) : null}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full pt-10 sm:mb-10 pb-8 sm:border-b border-neutral-700">
          <div className="px-[4vw] mx-auto flex items-center flex-col sm:flex-row sm:justify-between">
            <ul className="flex sm:items-center flex-col sm:flex-row gap-x-8 w-full space-y-6 sm:space-y-0">
              {/* Logo - language selector - Currency selector */}
              <li className="inline-block w-full sm:w-auto border-b sm:border-b-0 pb-4 border-neutral-700">
                <div className="flex items-center space-x-4">
                  <Link href="/">
                    <Icons.GoDaddy
                      className="w-44 text-white fill-white"
                      pathDesktopClassName="!block"
                    />
                    <span className="sr-only">GoDaddy Footer Logo</span>
                  </Link>
                </div>
              </li>

              <li className="inline-flex justify-evenly sm:hidden cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span className="text- font-bold">India - English</span>
                  <span className="inline-grid place-items-center">
                    <Icons.ChevronDown className="w-6 h-6 rotate-180 fill-white" />
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text- font-bold">INR ₹</span>
                  <span className="inline-grid place-items-center">
                    <Icons.ChevronDown className="w-6 h-6 rotate-180 fill-white" />
                  </span>
                </div>
              </li>
              <li className="hidden sm:inline-block cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span className="text- font-bold">India - English</span>
                  <span className="inline-grid place-items-center">
                    <Icons.ChevronDown className="w-6 h-6 rotate-180 fill-white" />
                  </span>
                </div>
              </li>
              <li className="hidden sm:inline-block cursor-pointer">
                <div className="flex items-center space-x-1">
                  <span className="text- font-bold">INR ₹</span>
                  <span className="inline-grid place-items-center">
                    <Icons.ChevronDown className="w-6 h-6 rotate-180 fill-white" />
                  </span>
                </div>
              </li>
              <ul className="flex items-center sm:ml-auto gap-x-5 w-full sm:w-auto justify-evenly">
                <li className="inline-block">
                  <Link href="#">
                    <Icons.Facebook className="w-5 h-5 fill-brand-gray" />
                  </Link>
                </li>
                <li className="inline-block">
                  <Link href="#">
                    <Icons.Instagram className="w-5 h-5 fill-brand-gray" />
                  </Link>
                </li>
                <li className="inline-block">
                  <Link href="#">
                    <Icons.YouTube className="w-5 h-5 fill-brand-gray" />
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </section>

        <section className="w-full pb-8">
          <div className="px-[4vw] mx-auto w-full">
            <div className="flex flex-col-reverse sm:flex-row justify-between gap-x-8 text-xs text-white font-semibold">
              <div className="space-y-4">
                <p>
                  Copyright © 1999 - 2023 GoDaddy Operating Company, LLC. All
                  Rights Reserved. The GoDaddy word mark is a registered
                  trademark of GoDaddy Operating Company, LLC in the US and
                  other countries. The “GO” logo is a registered trademark of
                  GoDaddy.com, LLC in the US.
                </p>
                <p>
                  Use of this Site is subject to express terms of use. By using
                  this site, you signify that you agree to be bound by these
                  Universal Terms of Service.
                </p>
              </div>
              <nav className="shrink-0 border-t py-4 sm:border-t-0 sm:py-0 border-neutral-700">
                <ul className="flex items-center space-x-4">
                  <li>
                    <Link href="/">Legal</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/">Cookies</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </footer>
    </LayoutGroup>
  );
};
