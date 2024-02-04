import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request, response) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id || !currentUser?.email) {
    return new NextResponse("Unauthorized", { status: 400 });
  }
  const req = await request.json();
  const { title, content, category } = req;

  console.log(session);

  const post = await prisma.post.create({
    data: {
      title,
      content,
      category: {
        connect: {
          id: category,
        },
      },
      author: {
        connect: {
          email: session.user.email,
        },
      },
    },
  });
  const updatedCategory = await prisma.category.update({
    where: {
      id: category,
    },
    data: {
      posts: {
        connect: {
          id: post.id,
        },
      },
    },
    include: {},
  });

  return NextResponse.json(post);
}

export async function GET(request) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id || !currentUser?.email) {
    return new NextResponse("Unauthorized", { status: 400 });
  }
  const req = await request.json();
  const { category = null } = req;
  //console.log({ req });

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
