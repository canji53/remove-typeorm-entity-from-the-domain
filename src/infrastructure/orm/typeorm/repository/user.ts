import { EntityRepository, AbstractRepository } from "typeorm";

import { UserRepository } from "../../../repository";
import { User as UserEntity } from "../entity/user";
import { User as UserDomain } from "../../../../domain/model/user";
import { Id } from "../../../../domain/model/id";

@EntityRepository(UserEntity)
export class UserOrmRepository
  extends AbstractRepository<UserEntity>
  implements UserRepository
{
  async save(identity: UserDomain): Promise<UserDomain> {
    const identityData = UserEntity.toEntity(identity);
    const savedIdentityData = await this.manager.save(identityData);

    return UserEntity.toDomain(savedIdentityData);
  }

  async findOneOrFailById(id: Id): Promise<UserDomain> {
    const userData = await this.manager.findOneOrFail(UserEntity, {
      id: id.value,
    });

    return UserEntity.toDomain(userData);
  }
}
