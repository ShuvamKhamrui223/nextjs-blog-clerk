import BlogEditForm from "@/components/forms/BlogEditForm";
import prisma from "@/lib/prisma";
import { Suspense } from "react";

async function getBlogContent(blogId: string) {
  try {
    const content = await prisma.blogPost.findUnique({ where: { id: blogId } });
    if (content) return content;
  } catch (error) {
    console.log("error occur", error);
  }
}

type Params = Promise<{ id: string }>;
const EditBlog = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const blogData = await getBlogContent(id);
  if (!blogData)
    return (
      <>
        <p className="">error occurred while fetching content</p>
      </>
    );
  return (
    <Suspense fallback={<p>loading...</p>}>
      <BlogEditForm title={blogData?.title} content={blogData?.content} />
    </Suspense>
  );
};

export default EditBlog;
