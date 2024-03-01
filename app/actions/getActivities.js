import prisma from "@/lib/prisma";

const getActivities = async () => {
  const activities = await prisma.activity.findMany({
    where: {},
    include: {
      participants: {
        select: {
          representative: true,
          user: {
            select: { name: true, studentId: true },
          },
        },
      },
      teacher: {
        select: { name: true },
      },
    },
  });
  return activities;
};

export default getActivities;
