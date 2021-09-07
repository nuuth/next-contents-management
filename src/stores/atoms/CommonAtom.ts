
import { atom } from 'recoil'

export const WindowState = atom<{
  width: number, 
  height: number
}>({
  key: 'window',
  default: {
    width: 0,
    height: 0
  }
})


export const GlobalProcessState = atom<{
  status: 'first' | 'finish'
}>({
  key: 'globalProcess',
  default: {
    status: 'first'
  }
})

export const countState = atom({
  key: 'sample/count', // 適当なユニークキー
  default: 0           // デフォルト値
});
