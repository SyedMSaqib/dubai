"use client"
import React from "react"
import { useLottie } from "lottie-react"
import loadingSpinner from "@/utils/loadingSpinner.json"

const App = () => {
  const options = {
    animationData: loadingSpinner,
    loop: true,
  }

  const { View } = useLottie(options)

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[500px] ">{View}</div>
    </div>
  )
}

export default App
