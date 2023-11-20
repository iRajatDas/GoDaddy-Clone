"use client";
import React from "react";
import NavigationProvider from "./navigation";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NavigationProvider>{children}</NavigationProvider>;
};
