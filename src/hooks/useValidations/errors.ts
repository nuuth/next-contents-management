import { ErrorParams } from './interface'

import { ShopParams } from 'api'

type ApiParams = {
  SHOP: ErrorParams<keyof typeof ShopParams>[]
}



export const ERRORS: ApiParams = {
  SHOP: [
    {
      name: 'id',
      validations: [
        { errorCode: '100', type:'required', message: '必須項目だよ' }
      ]
    },
    {
      name: 'name',
      validations: [
        { errorCode: '101', type:'required', message: '必須項目だよ' }
      ]
    },
    {
      name: 'isClose',
      validations: []
    }
  ]
}
