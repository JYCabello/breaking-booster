import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { Added } from '../events/added'

@Entity
export class Addition {
  public constructor(
    public readonly id: UUID,
    readonly amount: number,
  ) {}

  @Reduces(Added)
  public static reduceAdded(event: Added, currentAddition?: Addition): Addition {
    return Addition.orDefault(event.entityID(), currentAddition).addOne();
  }

  public addOne(): Addition {
    return new Addition(this.id, this.amount + 1);
  }

  public static orDefault(id: UUID, currentAddition?: Addition): Addition {
    return currentAddition || new Addition(id, 0);
  }

}
