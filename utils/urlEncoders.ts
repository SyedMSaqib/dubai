export const encodeData = (data: any): string => {
    const jsonString = JSON.stringify(data)
    const base64 = btoa(jsonString)
    return encodeURIComponent(base64)
  }
  
  export  const decodeData = (encodedData: string): any => {
    try {
      const base64 = decodeURIComponent(encodedData)
      const jsonString = atob(base64)
      return JSON.parse(jsonString)
    } catch (error) {
      console.error("Error decoding data:", error)
      return null
    }
  }