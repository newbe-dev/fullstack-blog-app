import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const req = await request.json();
  const { name, email, password } = req;
  console.log({ req });

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (user) {
    return NextResponse.json(
      JSON.stringify({
        status: "error",
        message: "User with that email alaready exists",
      }),
      { status: 500 }
    );
  }

  const passwordHash = bcrypt.hashSync(password, 10);
  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: passwordHash,
    },
  });

  return NextResponse.json(user);
}
