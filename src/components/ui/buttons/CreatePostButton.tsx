import Link from "next/link";

const CreatePostButton = () => {
  return (
    <Link
      href={"/create-blog"}
      className="bg-blue-500 text-gray-100 p-2 first-letter:uppercase"
    >
      write a post
    </Link>
  );
};

export default CreatePostButton;
