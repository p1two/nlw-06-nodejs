import { Compliment } from "@entities/Compliment";
import { ComplimentsRepositories } from "@repositories/ComplimentsRepositories";
import { TagsRepositories } from "@repositories/TagsRepositories";
import { UsersRepositories } from "@repositories/UsersRepositories";
import { BadRequest } from "@utils/errors";
import { getCustomRepository } from "typeorm";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest): Promise<Compliment> {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );
    const userRepositories = getCustomRepository(UsersRepositories);
    const tagRepositories = getCustomRepository(TagsRepositories);

    if (user_sender === user_receiver) {
      throw new BadRequest("User Receiver incorrect");
    }

    const userReceiverExists = await userRepositories.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new BadRequest("User Receiver does not exists");
    }

    const tagExists = await tagRepositories.findOne(tag_id);

    if (!tagExists) {
      throw new BadRequest("Tag does not exists");
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
