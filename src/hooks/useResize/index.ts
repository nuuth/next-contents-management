import { useEffect, useState } from 'react'


export default function useResize() {
  const [ windowWidth, setWindowWidth ] = useState(0)
  const [ windowHeight, setWindowHeight ] = useState(0)

  useEffect(() => {
    /** reisize event */
    window.addEventListener('resize', resizeHandler, { passive: true })

    /** 初回実行 */
    resizeHandler()

    /** 終了時処理 */
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  // window resize処理
  function resizeHandler() {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }

  return { windowWidth, windowHeight }
}
