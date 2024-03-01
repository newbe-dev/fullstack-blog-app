import prisma from "@/lib/prisma";
import getCurrentUser from "./getCurrentUser";

const getUsers = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id || currentUser.role != "ADMIN") {
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  } catch (error) {
    return [];
  }
};

export default getUsers;
