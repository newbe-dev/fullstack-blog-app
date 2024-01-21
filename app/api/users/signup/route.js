import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const req = await request.json();
  const { email, password } = req;
  console.log({ req });

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return NextResponse.json(
      { message: "User with that email alaready exists" },
      { status: 200 }
    );
  }

  const passwordHash = bcrypt.hashSync(password, 10);

  await prisma.user.create({
    data: {
      name: email,
      email: email,
      password: passwordHash,
    },
  });
  return NextResponse.json(
    { message: "Successfully Created" },
    { status: 200 }
  );
}
