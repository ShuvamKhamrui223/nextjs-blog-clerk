import { IBlog } from "@/types/blog";
import Link from "next/link";
import { readingTime } from "reading-time-estimator";
import AuthorActionButtons from "./AuthorActionButtons";

type BlogCardProps = {
  data: IBlog;
  showAuthorActions: boolean;
};
const BlogCard = ({ data, showAuthorActions }: BlogCardProps) => {
  const timeToRead = readingTime(data.content, 100, "en");
  return (
    <>
      <article className="bg-gray-100 dark:bg-gray-900 min-h-60 shadow-xl hover:shadow-2xl hover:bg-gray-50 hover:dark:bg-gray-800 transition-shadow duration-300 px-5 py-6 flex flex-col justify-between group sm:gap-4 lg:gap-6 relative">
        {showAuthorActions ? (
          <AuthorActionButtons authorId={data.authorId} postId={data.id} />
        ) : null}
        <div className="flex flex-col ">
          <Link href={`/blog/${data.id}`}>
            <h3 className="text-2xl first-letter:uppercase font-medium text-pretty text-gray-700 dark:text-gray-200">
              {data.title}
            </h3>
          </Link>

          <p className="my-2 text-xs text-gray-700 dark:text-gray-400">
            By <span className="dark:text-gray-300">{data.authorName}</span>
          </p>
        </div>
        <div
          className=" text-gray-400/90 dark:text-gray-400 text-sm"
          dangerouslySetInnerHTML={{ __html: data.content.slice(0, 200) }}
        ></div>

        <dl className="mt-6 flex gap-4 lg:gap-6">
          <div>
            <dt className="text-sm font-medium text-gray-700 dark:text-gray-400">
              Published on
            </dt>

            <dd className="text-xs text-gray-700 dark:text-gray-300">
              {data.createdAt.toLocaleDateString(navigator.language ?? "en-US")}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-700 dark:text-gray-400">
              Reading time
            </dt>

            <dd className="text-xs text-gray-700 dark:text-gray-300">
              {timeToRead.text}
            </dd>
          </div>
        </dl>
      </article>
    </>
  );
};

export default BlogCard;
