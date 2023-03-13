import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class Added {
  public constructor(
    readonly additionId: UUID,
    readonly remainder: number,
  ) {}

  public entityID(): UUID {
    return this.additionId;
  }
}
