import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getUsersByStudentId from "@/app/actions/getUsersByStudentId";

export async function POST(request) {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id) {
    return new NextResponse("Unauthorized", { status: 400 });
  }

  const req = await request.json();
  const { title, description, location, studentIds } = req;
  //   const users = await getUsersByStudentId(studentIds);
  //   if (!users) return new NextResponse("Not Match", { status: 400 });

  const activity = await prisma.activity.create({
    data: {
      title,
      description,
      location,
      attendees: {
        connect: studentIds.map((id) => {
          return { id: id };
        }),
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
  return NextResponse.json(activity);
}
