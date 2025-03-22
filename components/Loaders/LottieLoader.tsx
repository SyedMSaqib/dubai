"use client"
import dynamic from "next/dynamic"
import React from "react"
import loadingSpinner from "@/utils/lottieDotsLoading.json"

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

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
