/**
 * react用のclass一覧を返す
 * @param  {any[]} ...targets string | object | array
 */
export function classList(...targets: any[]) {
  const list: string[] = []
  targets.forEach((target) => {
    if (target instanceof Array) {
      target.forEach((t) => list.push(t))
    } else {
      switch (typeof target) {
        case 'string': {
          if (target !== '') list.push(target)
          break
        }
        case 'object': {
          Object.keys(target).forEach((key) => {
            if (target[key]) list.push(key)
          })
          break
        }
      }
    }
  })
  return list.join(' ')
}
