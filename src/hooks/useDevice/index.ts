import { useEffect, useState } from 'react'


export default function useDevice() {
  const [ isSp, setIsSp ] = useState(false)

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
    setIsSp(window.innerWidth < 800)
  }

  return { isSp }
}
