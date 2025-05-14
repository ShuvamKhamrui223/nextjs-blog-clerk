import BlogList from "@/components/BlogList";
import CreatePostButton from "@/components/ui/buttons/CreatePostButton";
import prisma from "@/lib/prisma";

async function getBlogs() {
  try {
    const response = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
    });

    return response;
  } catch (error) {
    console.log("something went wrong", error);
  }
}
const BlogPage = async () => {
  const blogs = await getBlogs();
  if (!blogs)
    return (
      <>
        <p className="">error occurred while fetching blogs</p>
      </>
    );
  return (
    <section className="">
      <div className="flex items-center justify-end mb-8">
        <CreatePostButton />
      </div>
      <BlogList blogs={blogs} authorActionVisibility={false} />
    </section>
  );
};

export default BlogPage;
