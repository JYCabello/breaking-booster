import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { Added } from '../events/added'

@Command({
  authorize: 'all'
})
export class Add {
  public constructor(
    readonly additionId: UUID,
    readonly amount: number,
  ) {}

  public static async handle(command: Add , register: Register): Promise<void> {
    register.events(new Added(command.additionId, command.amount));
  }
}
