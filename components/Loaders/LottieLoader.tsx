"use client"
import React from "react"
import Lottie from "lottie-react"

import loadingSpinner from "@/utils/lottieDotsLoading.json"

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie
        animationData={loadingSpinner}
        loop={true}
        style={{ width: "80px", height: "80px" }}
      />
    </div>
  )
}

export default App
