import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

const getBlogById = async (blogId: string) => {
  const response = await prisma.blogPost.findUnique({ where: { id: blogId } });

  if (!response) {
    notFound();
  }
  return response;
};
const SingleBlogPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const data = await getBlogById(id);

  return (
    <>
      <section className="max-w-6xl">
        <Link
          href={"/blog"}
          className="text-gray-600 dark:text-gray-200
        "
        >
          back
        </Link>
        <h2 className="text-5xl sm:text-6xl font-bold mt-8 mb-4 sm:mb-12">
          {data.title}
        </h2>
        <div className="my-8 flex items-center gap-4">
          <div className="relative size-6 rounded-full ">
            <Image src={data.authorProfilePic} alt={data.authorName} fill />
          </div>
          <strong className="text-blue-400">{data.authorName}</strong>
        </div>
        <div
          className="mx-auto prose prose-lg sm:prose-xl dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </section>
    </>
  );
};

export default SingleBlogPage;
