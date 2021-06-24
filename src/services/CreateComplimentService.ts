import { ComplimentsRepositories } from "@repositories/ComplimentsRepositories";
import { TagsRepositories } from "@repositories/TagsRepositories";
import { UsersRepositories } from "@repositories/UsersRepositories";
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
  }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const userRepositories = getCustomRepository(UsersRepositories);
    const tagRepositories = getCustomRepository(TagsRepositories);

    if (user_sender === user_receiver) {
      throw new Error("User Receiver incorrect");
    }

    const userReceiverExists = await userRepositories.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("User Receiver does not exists");
    }

    const tagExists = await tagRepositories.findOne(tag_id);

    if (!tagExists) {
      throw new Error("Tag does not exists");
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
