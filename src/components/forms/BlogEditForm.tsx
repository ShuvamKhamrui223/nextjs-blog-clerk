"use client";
import { FormEvent, useRef } from "react";
import SubmitPostButton from "../ui/buttons/SubmitPostButton";
import Tiptap from "./TipTap";

interface BlogEditFormProps {
  title: string;
  content: string;
}
const BlogEditForm = ({ title, content }: BlogEditFormProps) => {
  const hiddenInputRef = useRef(null);
  // const [newTitle, setNewTitle] = useState<string>(title ?? "");
  // const [newContent, setNewContent] = useState<string>(title ?? "");

    const onchange = () => { };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("saving")
    }
  return (
    <form className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-900 px-8 py-12 shadow-md flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="">
        <label
          htmlFor="title"
          className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        >
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            blog title
          </span>

          <input
            type="text"
            name="title"
            placeholder="blog title"
            value={title}
            onChange={() => console.log("changing")}
            className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  outline-0 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>
      </div>

      <div className="">
        <label htmlFor="message" className="">
          content
        </label>
        <input type="hidden" name="content" ref={hiddenInputRef} />
        <Tiptap key={"rich"} content={content} onChange={onchange} />
      </div>

      <div className="flex items-center gap-4 mt-4">
        <SubmitPostButton labelText="save changes" />
      </div>
    </form>
  );
};

export default BlogEditForm;
