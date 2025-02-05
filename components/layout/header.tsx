"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="flex flex-col p-4 text-sm xl:flex-row xl:justify-between">
        <div className="flex items-center justify-between xl:justify-normal">
          <Image
            src="/robot-head.png"
            alt="logo"
            className="size-7"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-bold tracking-wide">
            BR<span className="text-[#51E34F]">AI</span>N
          </h1>
          <Button
            variant="ghost"
            className="p-0 xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="size-2" />
          </Button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } xl:flex xl:items-center xl:px-2`}
        >
          <ul className="flex flex-col gap-2 font-semibold xl:gap-8 xl:flex-row">
            <li className="hover:text-green-400">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-green-400">
              <a href="#features">Features</a>
            </li>
            <li className="hover:text-green-400">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="hover:text-green-400">
              <a href="#testimonial">Testimonials</a>
            </li>
          </ul>
          <div className="flex justify-center w-full p-2">
            <Button
              variant="success"
              className={cn("font-semibold", isOpen && "w-full")}
            >
              Sign in
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};
