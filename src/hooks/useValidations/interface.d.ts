
/**
 * validation の種類
 */
export type ValidationType = 'required' | 'max' | 'min' | 'katakana' | 'hiragana' | 'number' | 'server'

/**
 * validation時に使用するパラメータ
 */
export type Validation = {
  /** validationの種類 */
  type: ValidationType
  /** サーバー側のエラーコード */
  errorCode?: string,
  /** エラー時に表示するメッセージ：省略時はデフォルト値等を表示 */
  message?: string
  /** 未設定時の値：省略時はnull */
  emptytValue?: string | null | undefined

  /** 最大文字数 */
  maxLength?: number
  /** 最小文字数 */
  minLength?: number
  /** カスタム判定 */
  custom?: (value: string) => boolean
  /** 非同期で判定を行う場合 */
  async?: (value: string) => Promise<boolean>
}




export type ErrorParams<T> = {
  name: T,
  validations: Validation[]
}


