import Aurora from "./Aurora/Aurora"
import { useState, useEffect } from "react"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)
  const [fadeScreen, setFadeScreen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 10)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (count >= 100) {
      const fadeTimer = setTimeout(() => setFadeScreen(true), 1000)
      const hideTimer = setTimeout(() => setLoading(false), 2000)
      return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer) }
    }
  }, [count])

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-1000 ${
          fadeScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="absolute text-white text-6xl font-bold">
          {count}%
        </div>
      </div>
    )
  )
}

export default PreLoader