import { Id } from "../../domain/model/id";
import { User } from "../../domain/model/user";

export interface UserRepository {
  save(user: User): Promise<User>;
  findOneOrFailById(id: Id): Promise<User>;
}
