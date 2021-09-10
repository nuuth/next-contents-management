/**
 * @description
 * 汎用的に使用できる関数。
 */


/** 
* 型判定 
* ※ typeofは安定しないので、Object.prototype.toString.call を使用する
*/
/** toStringの値をわかりやすいよう型名をフォーマットする */
export const toType = (t: any) => Object.prototype.toString.call(t).slice(8, -1).toLowerCase()

/** 
* Type Guard  
*/
/** objectかどうか */
export const isObject = (o: any): o is object => toType(o) === 'object'
/** HTMLコレクションかどうか */
export const isHtmlCollection = (h: any): h is HTMLCollection => toType(h) === 'htmlcollection'
/** 真偽値かどうか */
export const isBoolean = (f: any): f is boolean => toType(f) === 'boolean'
/** numberかどうか */
export const isNumber = (n: any): n is number => toType(n) === 'number' && !isNaN(n)
/** stringかどうか */
export const isString = (s: any): s is string => toType(s) === 'string'
/** 配列かどうか */
export const isArray = (a: any): a is any[] => toType(a) === 'array'


/**
* 状態判定
* (複数型でtype guardで指定できないもの)
*/
/** 関数かどうか */
export const isFunction = (f: any) => toType(f) === 'function'
/** undefined か nullの場合 true */
export const isEmpty = (v: any) => v === void 0 || v === null
/** element要素かどうか */
export const isElement = (e: any) => /^html\w*element$/.test(toType(e))
/** undefined, null, ""(空文字)でもない */
export const isValid = (v: any) => !isEmpty(v) && v !== ''

/**
* キャスト
*/
/** 文字列変換 */
export const toString = (v: any): string => v + ''

/**
* 数値に変換する
* @param v 数値にする値
* @param def 変換できなかった場合のデフォルト値
*/
export const toNumber = (v: string|number, def = 0) => {
  const n = parseInt(toString(v), 10)
  return isNaN(n) ? def : n
}

/**
* floatに変換する
* @param v floatにする値
* @param def 変換できなかった場合のデフォルト値
*/
export const toFloat = (v: string|number, def = 0) => {
  const n = parseFloat(toString(v))
  return isNaN(n) ? def : n
}

/**
* 配列かどうかをチェックし、配列ならそのまま、htmlコレクションなら配列化に、その他は引数要素1つの配列にして返す
* @param {any} target 配列化したい値
*/
export function toArray<T>(target: any): T[] {
  switch (toType(target)) {
    case 'array':
      return target
    case 'nodelist':
    case 'htmlcollection':
      return [].slice.call(target)
    default:
      return [target]
  }
}

/** touch 対応デバイスかどうか */
// export const isTouchable = (('ontouchstart' in document) && ('orientation' in window))

/**
* 引数で取得したstring, string[], objeftのクラス定義を1つのオブジェクトにして返す
* @param  {...any} targets string, object, string[]形式のクラス設定
*/
export function classList(...targets: any[]): string {
  const classAry: string[] = []
  const add = (list: any) => {
    switch (toType(list)) {
      case 'array':
        list.forEach((name: string) => classAry.push(name))
        break
      case 'object':
        Object.keys(list).forEach((key) => {
          if (list[key]) { classAry.push(key) }
        })
        break
      case 'string':
        if (list !== '') { add(list.split(',')) }
        break
    }
  }
  targets.forEach((target) => add(target))
  return classAry.join(' ')
}
