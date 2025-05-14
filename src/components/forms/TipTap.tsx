"use client";
// internal
import { KeyboardEvent, useEffect } from "react";

// tiptap
import Highlight from "@tiptap/extension-highlight";
import { useEditor, EditorContent } from "@tiptap/react";
import { Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// icons
import { DynamicIcon } from "lucide-react/dynamic";
import { dynamicIconImports } from "lucide-react/dynamic";

interface TiptapProps {
  content: string;
  onChange: (content: string) => void;
}

const Tiptap = ({ onChange, content }: TiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: { class: "text-yellow-600" },
      }),
    ],

    content: content,
    editorProps: {
      attributes: {
        class:
          "h-[30rem] md:h-[35rem] overflow-y-auto scrollbar-thin scrollbar-track-blue-950 scrollbar-thumb-blue-500 max-w-5xl p-10 rounded-b border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-800/70 outline-0 dark:text-white prose dark:prose-invert",
        name: "content",
      },
    },

    onUpdate: ({ editor }) => {
      const richhtml = editor.getHTML();
      onChange(richhtml);
    },
  });

  useEffect(() => {
    if (editor) onChange(editor.getHTML());
  }, [editor, onChange]);

  const preventSubmit = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.currentTarget.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col  dark:bg-gray-950">
      {editor ? <MenuBar editor={editor} /> : null}{" "}
      {editor !== null ? (
        <EditorContent editor={editor} onKeyDown={() => preventSubmit} />
      ) : null}{" "}
    </div>
  );
};

export default Tiptap;

interface EditorProps {
  editor: Editor | null;
}

interface IOption {
  onClick: () => void;
  pressed: boolean;
  icon: keyof typeof dynamicIconImports;
}
const MenuBar = ({ editor }: EditorProps) => {
  if (!editor) {
    return null;
  }

  const options: IOption[] = [
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
      icon: "heading-1",
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
      icon: "heading-2",
    },
    {
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
      icon: "heading-3",
    },
    {
      onClick: () => editor.chain().focus().setParagraph().run(),
      pressed: editor.isActive("paragraph"),
      icon: "text",
    },
    {
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
      icon: "bold",
    },
    {
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
      icon: "italic",
    },
    {
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
      icon: "strikethrough",
    },
    {
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editor.isActive("highlight"),
      icon: "highlighter",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-3 bg-gray-200 dark:bg-gray-800">
      {options.map((menubarOption, index) => {
        return (
          <button
            key={"menu_icon_" + index}
            onClick={menubarOption.onClick}
            className={`p-1.5 cursor-pointer  transition-all duration-500 ${
              menubarOption.pressed ? "border text-blue-500" : null
            }`}
          >
            <DynamicIcon
              name={menubarOption.icon}
              color={"white"}
              className="text-gray-100"
              size={24}
            />
          </button>
        );
      })}
    </div>
  );
};
