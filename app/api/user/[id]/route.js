import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(request, { params }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!user?.id) {
    return new NextResponse("Unauthorized", { status: 400 });
  }

  const req = await request.json();
  const { nickname } = req;
  console.log({ req });

  const newUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      nickname: nickname,
    },
  });

  return NextResponse.json(newUser);
}
