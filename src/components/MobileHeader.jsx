import React from "react";
import "../styles/mobileheader.css"

export default function MobileHeader(props) {
    
    const [onTop, setOnTop] = React.useState(true)
    const [expanded, setExpanded] = React.useState(false)

    function scrollIntoMiddle(e) {
        e.preventDefault()
        document.querySelector(`#${e.target.href.split('#')[1]}`).scrollIntoView({block:'center'});
        expandMenu()
    }

    React.useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY === 0 ? setOnTop(true) : setOnTop(false)
        })
    },[])

    function expandMenu() {
        if (expanded) {
            setTimeout(() => {
                setExpanded(false)
            }, 0);
        } else {
            setExpanded(true)
        }
    }

    const menu = (
        <nav className="menu">
            <div><a onClick={scrollIntoMiddle} href="#hero" className={`menu-item ${props.visibleSections.hero ? "active" : ""}`}>STRONA GŁÓWNA</a></div>
            <div><a onClick={scrollIntoMiddle} href="#about-us" className={`menu-item ${props.visibleSections.about ? "active" : ""}`}>O NAS</a></div>
            <div><a onClick={scrollIntoMiddle} href="#five-bullet-points" className={`menu-item ${props.visibleSections.services ? "active" : ""}`}>ZAKRES USŁUG</a></div>
            <div><a onClick={scrollIntoMiddle} href="#gallery" className={`menu-item ${props.visibleSections.gallery ? "active" : ""}`}>PORTFOLIO</a></div>
            <div><a onClick={scrollIntoMiddle} href="#why-us" className={`menu-item ${props.visibleSections.whyUs ? "active" : ""}`}>DLA CZEGO MY?</a></div>
            <div><a onClick={scrollIntoMiddle} href="#reviews" className={`menu-item ${props.visibleSections.reviews ? "active" : ""}`}>OPINIE KLIENTÓW</a></div>
            <div><a onClick={scrollIntoMiddle} href="#contact" className={`menu-item ${props.visibleSections.contact ? "active" : ""}`}>KONTAKT</a></div>
        </nav>
    )

    return (
        <header className={`${!onTop ? "scrolled" : ""} ${expanded ? "expanded" : ""}`}>
            <nav>
                <div className="logo">
                    <img src="./branding/logo/original/logo-transparent-landscape.png" alt="logo"/>
                </div>
                <div onClick={expandMenu} className={`divider ${expanded ? "cross" : ""}`}>
                    <svg id="divider-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 258.25" width='50px' height='50px'>
                        <rect className="cls-1" x="0" y="0" width="800" height="68.25" rx="34.12" ry="34.12"/>
                        <rect className="cls-1" x="50" y="189.25" width="700" height="69" rx="34.5" ry="34.5"/>
                    </svg>
                </div>
            </nav>
            {expanded? menu : <></>}
        </header>
    )
}