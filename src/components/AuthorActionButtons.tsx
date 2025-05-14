"use client";

import { deletePost } from "@/actions";
import { useUser } from "@clerk/nextjs";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
interface AuthorActionButtonsProps {
  authorId: string;
  postId: string;
}
const AuthorActionButtons = ({
  postId,
  authorId,
}: AuthorActionButtonsProps) => {
  const { user } = useUser();
  if (user?.id !== authorId) return null;
  return (
    <div className="absolute top-0 right-0 size-full bg-gradient-to-bl from-blue-950 hidden group-hover:flex items-start justify-end pt-4 pr-4 gap-3">
      <Link href={`blog/edit/${postId}`}>
        <Edit
          className="text-gray-200 text-sm cursor-pointer active:scale-90 transition-transform duration-150 "
          size={20}
          strokeWidth={2}
        />
      </Link>

      <form
        action={deletePost}
      >
        <input type="hidden" name="postId" value={postId} />
        <button type="submit">
          <Trash
            className="text-gray-200 text-sm cursor-pointer active:scale-90 transition-transform duration-150 "
            size={20}
            strokeWidth={2}
          />
        </button>
      </form>
    </div>
  );
};

export default AuthorActionButtons;
