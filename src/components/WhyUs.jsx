import React from "react";
import "../styles/whyus.css"
import { useInView } from "react-intersection-observer";

export default function WhyUs(props) {

    const { ref, inView } = useInView();

    React.useEffect(()=>{
        props.setVisibleSections(prev=>({
            ...prev,
            whyUs:inView
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView])

    return (
        <section ref={ref} className={inView ? "animate" : ""} id="why-us">
            <h2>Dlaczego my?</h2>
            <div className="points">
                <div className="point">
                    <span className="material-symbols-outlined">auto_awesome</span>
                    <h3>Jakość na najwyższym poziomie</h3>
                </div>
                <div className="point">
                    <span className="material-symbols-outlined">pending_actions</span>
                    <h3>Terminowość</h3>
                </div>
                <div className="point">
                <span className="material-symbols-outlined">architecture</span>
                    <h3>Profesjonalizm w każdym aspekcie</h3>
                </div>
                <div className="point">
                    <span className="material-symbols-outlined">engineering</span>
                    <h3>Zgrana, doświadczona ekipa</h3>
                </div>
                <div className="point">
                    <span className="material-symbols-outlined">thumb_up</span>
                    <h3>Najlepsi fachowcy i specjaliści</h3>
                </div>
            </div>
        </section>
    )
}