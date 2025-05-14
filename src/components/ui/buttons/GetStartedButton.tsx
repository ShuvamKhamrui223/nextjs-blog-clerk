import { SignInButton } from "@clerk/nextjs";

const GetStartedButton = () => {
  return (
    <SignInButton>
      <button className="inline-block rounded border border-indigo-600 bg-indigo-600 cursor-pointer px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700">
        Get Started
      </button>
    </SignInButton>
  );
};

export default GetStartedButton;
