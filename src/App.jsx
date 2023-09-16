import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ScrollSmoother from "gsap-trial/ScrollSmoother";
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {



  // useEffect(() => {
  //   ScrollTrigger.normalizeScroll(true)

  //   // Initialize ScrollTrigger
  //   // eslint-disable-next-line no-unused-vars
  //   let smoother = ScrollSmoother.create({
  //     smooth: 1,
  //     effects: true,
  //     normalizeScroll: true
  //   });

  //   // pin box-c when it reaches the center of the viewport, for 300px
  //   ScrollTrigger.create({
  //     pin: true,
  //     start: "center center",
  //     end: "+=300",
  //   });

  // }, []);

  return (
    <React.Fragment>

      <Header />
      <div id="smooth-wrapper ">
        <div id="smooth-content">

          <div className="scroll-container" >
            <Content />

          </div>
        </div>

      </div>

    </React.Fragment>
  )
}

export default App
