import { SignOutButton } from "@clerk/nextjs";

const SignoutButton = () => {
  return (
    <SignOutButton>
      <button className="text-blue-50 bg-red-700 hover:bg-red-600 px-2 py-1 capitalize cursor-pointer">
        signout
      </button>
    </SignOutButton>
  );
};

export default SignoutButton;
