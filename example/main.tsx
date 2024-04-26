import React from "react"
import ReactDOM from "react-dom/client"

import { Carousel } from "./carousel"

import "./main.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Carousel />
  </React.StrictMode>,
)
