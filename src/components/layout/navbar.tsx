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

const Navbar = () => {
  const pathname = usePathname();
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
    </nav>
  );
};

export default Navbar;
