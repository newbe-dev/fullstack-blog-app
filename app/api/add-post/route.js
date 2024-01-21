import { NextResponse } from "next/server";

export async function POST(request) {
  const req = await request.json();
  const { title, content } = req;
  console.log({ req });

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {
        create: {
          name: "ryan",
        },
        // 유저 커스텀
      },
    },
  });

  return NextResponse.json({ result });
}
