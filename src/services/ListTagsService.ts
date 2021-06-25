import { TagsRepositories } from "@repositories/TagsRepositories";
import { getCustomRepository } from "typeorm";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();
    // tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}` }));

    return tags;
  }
}

export { ListTagsService };
