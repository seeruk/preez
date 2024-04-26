import React from "react"
import ReactDOM from "react-dom/client"

import { Deck } from "@/components/deck"
import { Navigation } from "@/components/navigation"
import { Slide } from "@/components/slide"

import "./main.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Deck>
      <Slide>Go: Introduction</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>

      <Navigation />
    </Deck>

    <Deck>
      <Slide>Go: Introduction</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>
      <Slide>What we're going to cover</Slide>

      <Navigation />
    </Deck>
  </React.StrictMode>,
)
