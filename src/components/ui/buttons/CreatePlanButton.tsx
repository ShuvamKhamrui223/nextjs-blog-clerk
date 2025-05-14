import Link from "next/link";

const CreatePlanButton = () => {
  return (
    <Link
      href={"/create-plan"}
      className="text-lg capitalize bg-blue-500 text-blue-50 py-2 px-5"
    >
      create plan{" "}
    </Link>
  );
};

export default CreatePlanButton;
