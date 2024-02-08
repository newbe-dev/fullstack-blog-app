import prisma from "@/lib/prisma";

const getPosts = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: { name: true },
      },
      category: {
        select: { name: true },
      },
    },
  });
  return posts;
};

export default getPosts;
