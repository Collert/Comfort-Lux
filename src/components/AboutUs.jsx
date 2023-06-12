import React from "react";
import '../styles/aboutus.css'
import { useInView } from "react-intersection-observer";

export default function AboutUs (props) {
    const { ref, inView } = useInView();
    const video = React.useRef();

    React.useEffect(()=>{
        props.setVisibleSections(prev=>({
            ...prev,
            about:inView
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView])

    // React.useEffect(()=>{
    //     video.current.addEventListener("mouseenter", ()=>{
    //         video.current.play();
    //     })
    //     video.current.addEventListener("mouseleave", ()=>{
    //         video.current.pause();
    //     })
    // },[])

    return (
        <section id="about-us">
            <div className="text">
                <h2>O nas</h2>
                <p>
                    Oferujemy szeroki zakres usług remontowo-wykończeniowych. Naszym celem jest zadowolenie
                    klienta, a także satysfakcja z realizowanych zadań, do których podchodzimy zawsze w sposób
                    indywidualny i profesjonalny. Zapraszamy niżej do zapoznania się z naszymi zrealizowanymi
                    projektami.
                </p>
                <h3>Zalety naszej firmy</h3>
                <ul ref={ref} className={inView ? "animate" : ""} id="reasons">
                    <li><span>Wysoki standard usług</span></li>
                    <li><span>Bez ukrytych kosztów</span></li>
                    <li><span>Wycena przed zawarciem umowy</span></li>
                    <li><span>Pierwsze pieniądze wpłacasz dopiero po zakończeniu pierwszego etapu prac.</span></li>
                    <li><span>Współpraca tylko i wyłącznie ze sprawdzonymi ekipami spełniającymi standardy firmy.</span></li>
                </ul>
            </div>
            <div className="img-container">
                {/* <img alt="render of a kitchen" src="./ai_illustrations/kitchen_cropout.png"/> */}
                {/* <img src="./ai_illustrations/marble_texture_crop.png" alt=""/> */}
                <video autoPlay loop muted ref={video} src="./ai_illustrations/Untitled video - Made with Clipchamp.mp4"></video>
            </div>
        </section>
    )
}