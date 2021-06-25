import { User } from "@entities/User";
import { UsersRepositories } from "@repositories/UsersRepositories";
import { BadRequest } from "@utils/errors";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({
    name,
    email,
    admin = false,
  }: IUserRequest): Promise<User> {
    const userRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new BadRequest("Incorrect email");
    }

    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new BadRequest("User already exists");
    }

    const user = userRepository.create({
      name,
      email,
      admin,
    });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };
