import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../pages/landing/NavBar";
import Footer from "../pages/landing/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import strawberry from "../assets/videos/strawberry.mp4";
import "./root-layout.css";

function RootLayout() {
  const [spanArray, setSpanArray] = useState([]);

  function cellArr() {
    const gridCell = (
      <span
        style={{
          width: "250px",
          height: "250px",
          border: "1px solid white",
        }}
      />
    );
    let cellArray = [];
    for (let i = 0; i < 16; i++) {
      cellArray.push(gridCell);
    }

    setSpanArray(cellArray);
  }

  useEffect(() => {
    cellArr();
  }, []);
  return (
    <>
      {/* view article media query parallax: https://medium.com/@other.world.html/adaptive-parallax-with-react-spring-e301c5740e6f */}
      {/* original 2.7 */}
      <Parallax
        id="parallax"
        // pages={window.innerWidth < 992 && window.innerWidth > 766 ? 3.5 : 2.7}
        pages={2.7}
      >
        {/* Layer: strawberry video background */}
        <ParallaxLayer id="paraLayer1" speed={0} factor={4}>
          <video
            src={strawberry}
            autoPlay
            loop
            muted
            width="100%"
            height="25%"
            style={{ objectFit: "cover" }}
          />
        </ParallaxLayer>
        {/* Layer: a div containing the grid */}
        <ParallaxLayer factor={4} offset={0} speed={0.5}>
          <div
            style={{
              width: "80%",
              height: "70%",
              margin: "auto",
              marginTop: "10%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignContent: "center",
              opacity: "0.05",
            }}
          >
            {/* spanArray renders grid of spans */}
            {spanArray}
          </div>
        </ParallaxLayer>
        {/*Layer: overlay gradient fades background vid*/}
        <ParallaxLayer id="paraLayer2" factor={1}></ParallaxLayer>
        {/* Layer: Layout of Nav and content */}
        <ParallaxLayer offset={0} factor={3} speed={0.3}>
          <NavBar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </ParallaxLayer>
        {/* Layer: Footer, original offset=2 */}
        <ParallaxLayer
          id="footerLayer"
          offset={
            2
            // window.innerWidth < 992 && window.innerWidth > 766 ? 2.3 : 1.7
          }
        >
          <h1>where footer was</h1>
        </ParallaxLayer>
      </Parallax>
      {/* </div> */}
    </>
  );
}
export default RootLayout;

//#region parallax v1
// import { Outlet } from "react-router-dom";
// import NavBar from "../pages/landing/NavBar";
// import Footer from "../pages/landing/Footer";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// // import "./root-layout.css";
// const wineGlass =
//   "https://images.pexels.com/photos/33265/wine-bottle-wine-glasses-wine-ambience.jpg";
// function RootLayout() {
//   return (
//     <>
//       <Parallax pages={4.6}>
//         <ParallaxLayer
//           speed={0}
//           style={{
//             backgroundImage: `url(${wineGlass})`,
//             backgroundSize: "cover",
//             display: "flex",
//             justifyContent: "center",
//             alignContent: "center",
//           }}
//           // factor helps span the background throughout multiple pages
//           factor={5}
//         ></ParallaxLayer>
//         <ParallaxLayer offset={0} factor={4} speed={0.3}>
//           <NavBar />
//           <main>
//             <Outlet />
//           </main>
//         </ParallaxLayer>
//         <ParallaxLayer offset={4.1}>
//           <Footer />
//         </ParallaxLayer>
//       </Parallax>
//     </>
//   );
// }
// export default RootLayout;
//#endregion

//#region parallax v2
// import React, { useRef } from "react";
// import NavBar from "../pages/landing/NavBar";
// import Footer from "../pages/landing/Footer";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import styles from "./styles.module.css";

// const Page = ({ offset, gradient, onClick }) => (
//   <>
//     <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
//       <div className={styles.slopeBegin} />
//     </ParallaxLayer>

//     <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
//       <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
//     </ParallaxLayer>

//     <ParallaxLayer
//       className={`${styles.text} ${styles.number}`}
//       offset={offset}
//       speed={0.3}
//     >
//       <span>0{offset + 1}</span>
//     </ParallaxLayer>
//   </>
// );

// function RootLayout() {
//   const parallax = useRef(null);

//   const scroll = (to) => {
//     if (parallax.current) {
//       parallax.current.scrollTo(to);
//     }
//   };

//   return (
//     <div style={{ background: "#dfdfdf" }}>
//       <NavBar style={{ position: "relative", top: "100px", zIndex: 2 }} />
//       <Parallax
//         className={styles.container}
//         ref={parallax}
//         pages={4}
//         horizontal
//       >
//         <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
//         <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
//         <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
//       </Parallax>
//       <Footer style={{ zIndex: 2 }} />
//     </div>
//   );
// }

// export default RootLayout;
//#endregion

//#region
// import React, { useRef } from "react";
// // import { Outlet } from "react-router-dom";
// import NavBar from "../pages/landing/NavBar";
// import Footer from "../pages/landing/Footer";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import styles from "./styles.module.css";

// const Page = ({ offset, gradient, onClick }) => (
//   <>
//     <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
//       <div className={styles.slopeBegin} />
//     </ParallaxLayer>

//     <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
//       <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
//     </ParallaxLayer>

//     <ParallaxLayer
//       className={`${styles.text} ${styles.number}`}
//       offset={offset}
//       speed={0.3}
//     >
//       <span>0{offset + 1}</span>
//     </ParallaxLayer>
//   </>
// );
// function RootLayout() {
//   const parallax = useRef(null);

//   const scroll = (to) => {
//     if (parallax.current) {
//       parallax.current.scrollTo(to);
//     }
//   };
//   return (
//     <>
//       <div style={{ background: "#dfdfdf" }}>
//         <NavBar style={{ position: "relative", top: "100px" }} />
//         <Parallax
//           className={styles.container}
//           ref={parallax}
//           pages={4}
//           horizontal
//         >
//           <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
//           <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
//           <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
//         </Parallax>
//         <Footer />
//       </div>
//       {/* <Outlet /> */}
//     </>
//   );
// }
// export default RootLayout;
//#endregion
