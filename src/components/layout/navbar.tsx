"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignoutButton from "../ui/buttons/SignoutButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navMenuItems = [
    {
      href: "/",
      label: "home",
    },
    {
      href: "/blog",
      label: "blog",
    },
    {
      href: "/all-plans",
      label: "all plans",
    },
    {
      href: "/create-plan",
      label: "create plan",
    },
    {
      href: "/dashboard",
      label: "dashboard",
    },
  ];
  return (
    <>
      <nav className="flex justify-end items-center p-4 gap-4 h-16  dark:bg-gray-800/40">
        <ul className="hidden md:flex items-center gap-2">
          {navMenuItems.map((item) => (
            <li
              className={` text-sm ${
                pathname === item.href
                  ? "text-blue-400 font-black"
                  : "text-gray-600 dark:text-gray-200"
              } capitalize`}
              key={item.label}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <SignoutButton />
          <UserButton />
        </SignedIn>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="block md:hidden cursor-pointer text-gray-600 dark:text-gray-200"
        >
          <Menu />
        </button>
      </nav>

      <aside
        className={`${
          isMenuOpen ? "w-[70%]" : "w-0 hidden"
        } h-full md:hidden absolute top-0 left-0 flex flex-col transition-all duration-200 bg-gray-100 dark:bg-gray-800 px-4 py-6`}
      >
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="self-end mb-8 md:hidden cursor-pointer text-gray-600 dark:text-gray-200"
        >
          <X />
        </button>
        <ul className="flex flex-col md:hidden gap-2">
          {navMenuItems.map((item) => (
            <li
              className={` text-sm ${
                pathname === item.href
                  ? "text-blue-400 font-black"
                  : "text-gray-600 dark:text-gray-200"
              } capitalize`}
              key={item.label}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
