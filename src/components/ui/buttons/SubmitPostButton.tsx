"use client";

import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
interface SubmitPostButton {
  labelText: string;
}
const SubmitPostButton = ({ labelText }: SubmitPostButton) => {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-600 text-blue-50 disabled:bg-blue-950 capitalize px-4 py-2 cursor-pointer"
      type="submit"
      disabled={pending}
    >
      {pending ? <LoaderCircle className="animate-spin" /> : labelText}
    </button>
  );
};

export default SubmitPostButton;
