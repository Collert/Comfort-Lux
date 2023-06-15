import React from "react";
import "../../styles/workwithus.css"
import { useInView } from "react-intersection-observer";
import WorkWithUsSection from "./WorkWithUsSection";
import WorkWithUsLine from "./WorkWithUsLine";

export default function WorkWithUs(props) {

    const [visible, setVisible] = React.useState(false)

    const { ref, inView } = useInView();

    React.useEffect(()=>{
        if (inView) {setVisible(true)}
        props.setVisibleSections(prev=>({
            ...prev,
            workWithUs:inView
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView])

    return (
        <section ref={ref} className={visible ? 'animate' : ''} id="timeline">
            {!props.isPortrait ? 
            <div>
                <h2>współpraca z nami</h2>
                <div className="timeline">
                    <div id="left-points">
                        <WorkWithUsSection text="Wyjeżdżamy do obiektu i wykonujemy pomiary gratis"/>
                        <WorkWithUsSection/>
                        <WorkWithUsSection text="Po akceptacji podpisujemy umowę"/>
                        <WorkWithUsSection/>
                        <WorkWithUsSection text="Sprzątamy obiekt i przekazujemy Tobie"/>
                    </div>
                    <WorkWithUsLine/>
                    <div id="right-points">
                        <WorkWithUsSection/>
                        <WorkWithUsSection text="Sporządzamy kosztorys"/>
                        <WorkWithUsSection/>
                        <WorkWithUsSection text="Wykonujemy prace wykończeniowe w ustalonym terminie, rozliczamy się zawsze za faktycznie
                                                wykonane usługi, bez pobierania zaliczek za robotę"/>
                        <WorkWithUsSection/>
                    </div>
                </div>
            </div>
            :
            <><h2>współpraca z nami</h2>
            <div className="mobile-points">
                <WorkWithUsLine/>
                <div className="right-side">
                    <WorkWithUsSection text="Wyjeżdżamy do obiektu i wykonujemy pomiary gratis"/>
                    <WorkWithUsSection text="Sporządzamy kosztorys"/>
                    <WorkWithUsSection text="Po akceptacji podpisujemy umowę"/>
                    <WorkWithUsSection text="Wykonujemy prace wykończeniowe w ustalonym terminie, rozliczamy się zawsze za faktycznie
                                            wykonane usługi, bez pobierania zaliczek za robotę"/>
                    <WorkWithUsSection text="Sprzątamy obiekt i przekazujemy Tobie"/>
                </div>
            </div>
            </>}
        </section>
    )
}