
// components
import Parallax from "./assets/components/Parallax";
import Welcome from "./assets/components/Welcome";
import Theater from "./assets/components/Theater";

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
    </>
  )
}

export default App
