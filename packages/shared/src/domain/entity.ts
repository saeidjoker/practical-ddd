export abstract class Entity<TId, TProps extends { [key: string]: any }> {
  readonly id: TId
  protected props: TProps

  constructor({ id, props }: { id: TId; props: TProps }) {
    this.id = id
    this.props = props
  }
}
