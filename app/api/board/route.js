import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id) {
    return new NextResponse("Unauthorized", { status: 400 });
  }
  const req = await request.json();
  const { title, content, category } = req;

  const post = await prisma.post.create({
    data: {
      title,
      content,
      category: {
        connect: {
          name: category,
        },
      },
      author: {
        connect: {
          email: currentUser.email,
        },
      },
    },
  });
  // const updatedCategory = await prisma.category.update({
  //   where: {
  //     id: category,
  //   },
  //   data: {
  //     posts: {
  //       connect: {
  //         //id: post.id,
  //       },
  //     },
  //   },
  //   include: {},
  // });
  // console.log("a");
  return NextResponse.json(post);
}

export async function GET(request) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id || !currentUser?.email) {
    return new NextResponse("Unauthorized", { status: 400 });
  }
  const req = await request.json();
  const { category = null } = req;

  const posts = await prisma.post.findMany({
    where: {
      categoryId: category,
    },
    include: {
      author: true,
    },
  });

  return NextResponse.json(posts);
}
