import { isEqual } from 'lodash'

export abstract class ValueObject<TProps extends { [key: string]: any }> {
  readonly props: TProps

  constructor(props: TProps) {
    this.props = Object.freeze(props)
  }

  equals(vo?: ValueObject<TProps>): boolean {
    return vo && vo.props && isEqual(this.props, vo.props)
  }
}
