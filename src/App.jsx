
// components
import Parallax from "./assets/components/Parallax";
import Welcome from "./assets/components/Welcome";
import Theater from "./assets/components/Theater";
import Lumos from "./assets/components/Lumos";

// GSAP
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(useGSAP);

function App() {
  return (
    <>
      <Welcome />
      <Parallax />
      <Theater />
      <Lumos />
    </>
  )
}

export default App
