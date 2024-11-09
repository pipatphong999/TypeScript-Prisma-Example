import { Request, Response, NextFunction } from "express";
import UserService from "../services/UserService";

class UserController {
  static async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
