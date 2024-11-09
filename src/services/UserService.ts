import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UserService {
  static async getAllUsers() {
    return await prisma.user.findMany();
  }

  static async createUser(email: string, name: string) {
    return await prisma.user.create({
      data: { email, name },
    });
  }
}

export default UserService;
