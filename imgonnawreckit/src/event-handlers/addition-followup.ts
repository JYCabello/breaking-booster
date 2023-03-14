import { Added } from '../events/added'
import { Booster, EventHandler } from '@boostercloud/framework-core'
import { Register } from '@boostercloud/framework-types'
import { Addition } from '../entities/addition'

@EventHandler(Added)
export class AdditionFollowup {
  public static async handle(event: Added, register: Register): Promise<void> {
    const remainder = event.remainder - 1;
    if (remainder <= 0) {
      return;
    }
    const entity = await Booster.entity(Addition, event.entityID()) as Addition;
    if (remainder % 2 === 0) {
      register.events(
        new Added(entity.id, remainder / 2),
        new Added(entity.id, remainder / 2)
      );
    } else {
      register.events(new Added(entity.id, remainder));
    }
  }
}
