import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getUsersByStudentId from "@/app/actions/getUsersByStudentId";

export async function POST(request) {
  const currentUser = await getCurrentUser();
  if (!currentUser || !currentUser.id) {
    return new NextResponse("Unauthorized", { status: 400 });
  }

  const req = await request.json();
  const { subject, description, location, teacherName, date, studentIds } = req;

  const teacher = await prisma.user.findFirst({
    where: {
      name: teacherName,
      //role: "TEACHER",
    },
  });
  if (!teacher)
    return new NextResponse(`There is no teacher named ${teacherName}`, {
      status: 400,
    });

  const activity = await prisma.activity.create({
    data: {
      approved: currentUser.role == "TEACHER",
      subject,
      description,
      location,
      teacher: {
        connect: { id: teacher.id },
      },
      creatorId: currentUser.studentId,
      date,
      participants: {
        create: studentIds.map((studentId) => ({
          user: { connect: { studentId: studentId } },
          representative: studentId == currentUser.studentId,
        })),
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
