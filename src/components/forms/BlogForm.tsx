"use client";

import { createNewBlogPost } from "@/actions";
import Tiptap from "./TipTap";
import { useRef, useState } from "react";
import SubmitPostButton from "../ui/buttons/SubmitPostButton";

const BlogForm = () => {
  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState<string>("");
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const onChange = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = content;
    }
  };
  return (
    <form
      className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-900 px-8 py-12 shadow-md flex flex-col gap-4"
      action={createNewBlogPost}
      onSubmit={onChange}
    >
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
            onChange={(e) => setTitle(e.target.value)}
            className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  outline-0 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </label>
      </div>

      <div className="">
        <label htmlFor="message" className="">
          content
        </label>
        <input type="hidden" name="content" ref={hiddenInputRef} />
        <Tiptap onChange={setContent} key={"rich"} content={content} />
      </div>

      <div className="flex items-center gap-4 mt-4">
        <SubmitPostButton labelText="publish`"/>
        <button className="first-letter:uppercase hidden">save a draft</button>
      </div>
    </form>
  );
};

export default BlogForm;
