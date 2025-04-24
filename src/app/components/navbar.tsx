import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = async () => {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16  bg-gray-800/40">
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Navbar;
