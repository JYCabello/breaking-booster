import { ReadModel, Projects } from '@boostercloud/framework-core'
import { UUID, ProjectionResult } from '@boostercloud/framework-types'
import { Addition } from '../entities/addition'

@ReadModel({
  authorize: 'all'
})
export class AdditionReadModel {
  public constructor(
    public readonly id: UUID,
    public readonly amount: number,
  ) {}

  @Projects(Addition, "id")
  public static projectAddition(entity: Addition): ProjectionResult<AdditionReadModel> {
    return new AdditionReadModel(entity.id, entity.amount);
  }

}
