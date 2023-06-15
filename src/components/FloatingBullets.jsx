import React from "react";
import "../styles/services.css"
import "../colors.css"
import { useInView } from "react-intersection-observer";

export default function FloatingBullets (props) {

    const [visible, setVisible] = React.useState(false)
    const { ref, inView } = useInView();
    const [expandedPoint, setExpandedPoint] = React.useState(null)

    function expandPoint(e) {
        if (expandedPoint === e.currentTarget.id) {
            setExpandedPoint(null)
        } else {
            setExpandedPoint(e.currentTarget.id)
        }
    }

    React.useEffect(()=>{
        if (inView) {setVisible(true)}
        props.setVisibleSections(prev=>({
            ...prev,
            services:inView
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView])

    return (
        <section ref={ref} className={visible ? "animate" : ""} id="five-bullet-points">
            <div id="point-1" onClick={expandPoint} className={`floating-bullet ${"point-1" === expandedPoint ? "active" : ""}`}>
                <div className="wrapper">
                    <div><span className="material-symbols-outlined">hardware</span></div>
                    <div><h3>Biały montaż</h3></div>
                    <div>
                        <ul>
                        <li>Montaż mebli łazienkowych, wanien, brodzików, kabin natryskowych i paneli prysznicowych, wc, geberitów.</li>
                        <li>Zakładanie umywalek, postumentów, zlewozmywaków, baterii, kraników i zaworów.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="point-2" onClick={expandPoint} className={`floating-bullet ${"point-2" === expandedPoint ? "active" : ""}`}>
                <div className="wrapper">
                    <div><span className="material-symbols-outlined">imagesearch_roller</span></div>
                    <div><h3>Ściany i sufity</h3></div>
                    <div>
                        <ul>
                            <li>Lmalowanie</li>
                            <li>Tynki</li>
                            <li>Gładzie</li>
                            <li>Sufity podwieszane</li>
                            <li>Ścianki działowe</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="point-3" onClick={expandPoint} className={`floating-bullet ${"point-3" === expandedPoint ? "active" : ""}`}>
                <div className="wrapper">
                    <div><span className="material-symbols-outlined">grid_view</span></div>
                    <div><h3>Usługi glazurnicze</h3></div>
                    <div>
                        <ul>
                        <li>Układanie glazury, mozaiki, terakoty, gresu, granitogresu oraz każdego rodzaju kafli zgodnie z projektem klienta.</li>
                        <li>Szlifowanie płytek pod kątem 45°</li>
                        <li>Docinanie cokołów oraz wycinanie otworów.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <img id="brush-illustration" alt="golden paintbrush" src="./ai_illustrations/brush.png"/> */}
            <div id="point-4" onClick={expandPoint} className={`floating-bullet ${"point-4" === expandedPoint ? "active" : ""}`}>
                <div className="wrapper">
                    <div><span className="material-symbols-outlined">bolt</span></div>
                    <div><h3>Elektryka</h3></div>
                    <div>
                        <ul>
                        <li>Kucie pod instalacje</li>
                        <li>Łączenie ze skrzynkami bezpiecznikowymi</li>
                        <li>Osadzanie puszek</li>
                        <li>Montaż gniazdek i wyłączników</li>
                        <li>Montaż oświetlenia (lamp, kinkietów, halogenów)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="point-5" onClick={expandPoint} className={`floating-bullet ${"point-5" === expandedPoint ? "active" : ""}`}>
                <div className="wrapper">
                    <div><span className="material-symbols-outlined">nest_wifi_gale</span></div>
                    <div><h3>Podłogi</h3></div>
                    <div>
                        <ul>
                        <li>Układanie paneli</li>
                        <li>Parkietu</li>
                        <li>Deski podłogowej oraz deski barlineckiej</li>
                        <li>Montaż listew przypodłogowych</li>
                        <li>Progów</li>
                        <li>Parapetów.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="point-6" onClick={expandPoint} className={`floating-bullet ${"point-6" === expandedPoint ? "active" : ""}`}>
                <div className="wrapper">
                    <div><span className="material-symbols-outlined">plumbing</span></div>
                    <div><h3>Hydraulika</h3></div>
                    <div>
                        <ul>
                            <li>Zmiana układu hydraulicznego</li>
                            <li>Nowe punkty zimnej/ciepłej wody</li>
                            <li>Prace hydrauliczne po zalaniu</li>
                            <li>Montaż stelażu BD oraz WC.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
