import BlogList from "@/components/BlogList";
import CreatePostButton from "@/components/ui/buttons/CreatePostButton";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

const getBlogsByEmail = async (writterID: string | undefined) => {
  if (writterID) {
    const blogs = await prisma.blogPost.findMany({
      where: { authorId: writterID },
    });
    if (blogs) return blogs;
  }
};

const DashboardPage = async () => {
  const user = await currentUser();
  const blogs = await getBlogsByEmail(user?.id);

  if (!blogs)
    return (
      <>
        <p className="">Error occurred while fetching blogs</p>
      </>
    );

  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-bold first-letter:uppercase">
          posts written by you
        </h3>
        <CreatePostButton />
      </div>
      <BlogList blogs={blogs} authorActionVisibility />
    </section>
  );
};

export default DashboardPage;
