import { useContext } from "react"

import { PreezContext } from "@/context/preez"

export const usePreez = () => {
  const context = useContext(PreezContext)
  if (context === undefined) {
    throw new Error("usePreez must be used within a PreezProvider")
  }
  return context
}
