import { ComplimentsRepositories } from "@repositories/ComplimentsRepositories";
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

class ListUserSentComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );

    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return classToPlain(compliments);
  }
}

export { ListUserSentComplimentsService };
