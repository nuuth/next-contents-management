import { Dispatch, FormEventHandler, MutableRefObject, SetStateAction, useState } from "react"

import { Validation } from './interface'
import { execValidation } from './validations'


export default function useValidations<T, U extends keyof T>(valuesState: [T, Dispatch<SetStateAction<T>>]) {


  const [values, setValues] = valuesState

  const validations = (name: U) => {

    const value = values[name] || ''
    const onValidation: FormEventHandler = (event) => {
      if(event.target !== null) {
        const value = (event.target as any).value
        const stars = [...value]
        const length = stars.length


        setValues(Object.assign({}, values, { [name]: value }))
        
        // console.log(execValidation(value, length, validations))
        // console.log(value, obj)
      }
    }
    // console.log('value : ', defaultValue)
    return { onValidation, value }
  }

  const checked = () => {
    console.log(values)
  }
  
  return { validations, checked }
}


