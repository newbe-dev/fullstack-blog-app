import prisma from "@/lib/prisma";

const getActivities = async () => {
  const activities = await prisma.activity.findMany({
    where: {},
    include: {
      participants: {
        select: { userId: true, representative: true },
      },
      teacher: {
        select: { name: true, id: true },
      },
    },
  });
  return activities;
};

export default getActivities;
