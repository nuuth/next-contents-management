
type ApiItemParam<T> = {
  toParse?: (value: T) => string,
  toServer?: (value: string) => T,
  default?: T
}

export const ShopParams: {
  id: ApiItemParam<number>,
  name: ApiItemParam<string>,
  isClose: ApiItemParam<boolean>
} = {
  id: { toParse: (v) => v + '', toServer: (v) => parseInt(v, 10) },
  name: {},
  isClose: { toParse: (v) => v ? '1' : '0', toServer: (v) => v === '1' }
}