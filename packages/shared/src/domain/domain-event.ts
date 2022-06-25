import { cloneDeep } from 'lodash'
import { UnixTimeMilli } from '../time/clock'

export abstract class DomainEvent<TProps extends { [key: string]: unknown }> {
  abstract readonly namespace: string
  abstract readonly name: string
  readonly id: string
  readonly occurredOn: UnixTimeMilli
  readonly props: Readonly<TProps>

  constructor({ id, occurredOn, props }: { id: string; occurredOn: UnixTimeMilli; props: TProps }) {
    this.id = id
    this.occurredOn = occurredOn
    this.props = Object.freeze(cloneDeep(props))
  }
}
