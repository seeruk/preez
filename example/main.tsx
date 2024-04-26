import React from "react"
import ReactDOM from "react-dom/client"

import { Deck } from "@/components/deck"
import { Navigation } from "@/components/navigation"
import { Slide } from "@/components/slide"
import { Slides } from "@/components/slides"

import "./main.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Deck>
      <Slides>
        <Slide>Go: Introduction</Slide>
        <Slide>What we're going to cover</Slide>
        <Slide>What we're going to cover</Slide>
        <Slide>What we're going to cover</Slide>
        <Slide>What we're going to cover</Slide>
        <Slide>What we're going to cover</Slide>
        <Slide>What we're going to cover</Slide>
        <Slide>What we're going to cover</Slide>
        <Slide>What we're going to cover</Slide>
      </Slides>
      <Navigation />
    </Deck>
  </React.StrictMode>,
)
