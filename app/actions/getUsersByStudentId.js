import prisma from "@/lib/prisma";

const getUsersByStudentId = async (studentIds) => {
  const users = await prisma.user.findMany({
    where: {
      studentId: { in: studentIds },
    },
  });
  return users;
};

export default getUsersByStudentId;
