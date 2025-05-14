import { IBlog } from "@/types/blog";
import BlogCard from "./BlogCard";

type BlogListProps = {
  blogs: IBlog[] | undefined;
  showNoPostMessage?: boolean;
  authorActionVisibility: boolean;
};

const BlogList = ({
  blogs,
  showNoPostMessage = false,
  authorActionVisibility,
}: BlogListProps) => {
  if (showNoPostMessage && blogs?.length === 0)
    <p className="col-span-4 text-gray-800  dark:text-gray-200">no post</p>;

  return (
    <>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {blogs !== undefined
          ? blogs?.map((blog) => (
              <li key={blog.id}>
                <BlogCard
                  data={blog}
                  showAuthorActions={authorActionVisibility}
                />
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default BlogList;
