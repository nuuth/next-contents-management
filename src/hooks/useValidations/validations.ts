import { ValidationType, Validation } from './interface'

type ValidationError = {
  message: string
  value: string
}
export function execValidation(value: string, count: number, vals: Validation[], defaultMessage = '') {
  const errors:ValidationError[] = []
  vals.forEach(val => {
    switch (val.type) {
      case 'required': {
        if(value === '') {
          errors.push({ value, message: getMessage('必須項目です', defaultMessage, val.message) })
        }
        break
      }
      case 'max': {
        if(val.maxLength) {
          if(val.maxLength < count) {
            
          }
        }
        break
      }
      case 'min': {
        break
      }
      case 'hiragana': {
        break
      }
      case 'katakana': {
        break
      }
    }
  })
  return errors
}


function getMessage(...messages: (string | undefined)[]) {
  const mes = messages.reverse().find(mes => mes !== '' && mes !== undefined)
  return mes ? mes : 'エラーです'
}
