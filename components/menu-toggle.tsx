"use client";
import { useMenuStore } from "@/lib/store/navigation";
import { Menu } from "lucide-react";
import React from "react";

const MenuToggle = () => {
  const toggle = useMenuStore((state) => state.toggleMenu);

  return (
    <button className="place-items-center xl:hidden grid" onClick={toggle} role="menu" title="Navigation">
      <Menu />
    </button>
  );
};

export default MenuToggle;
