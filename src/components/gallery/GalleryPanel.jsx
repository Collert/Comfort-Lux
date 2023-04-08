import React from "react";

export default function GalleryPanel (props) {

    const dictionary = {
        "bathroom":{
            icon:"shower",
            title:"Bathrooms",
            backgroundImg:"bathrooms-img"
        },
        "kitchen":{
            icon:"kitchen",
            title:"Kitchens",
            backgroundImg:"kitchens-img"
        },
        "livery":{
            icon:"chair",
            title:"Living Spaces",
            backgroundImg:"living-img"
        },
        "bedroom":{
            icon:"bed",
            title:"Bedrooms",
            backgroundImg:"bedrooms-img"
        },
    }

    function handleClick () {
        props.setActivePanel(props.id)
        setTimeout(() => {
            props.setPrevActivePanel(props.id)
        }, 600);
    }

    return (
        <div onClick={handleClick} className={`panel 
                                            ${props.active === props.id ? "active-panel" : ""} 
                                            ${props.prevActivePanel === props.id ? "was-active" : ""} 
                                            ${dictionary[props.theme].backgroundImg}`}
            >
            <div className="panel-content-wrapper">
                <h2 id={`panel${props.id}-heading`}><button
                    className="accordion-trigger"
                    aria-controls={`panel${props.id}-content`}
                    aria-expanded={props.active === props.id}
                    >
                    <span className="material-symbols-outlined accordion-icon">{dictionary[props.theme].icon}</span>
                </button></h2>
                
                {props.active === props.id &&
                <div 
                className="panel-content" 
                id={`panel${props.id}-content`}
                aria-labelledby={`panel${props.id}-heading`}
                role="region"
                >
                    <h2 className="panel-title" id={`panel${props.id}-title`}>{dictionary[props.theme].title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>}
            </div>
        </div>
    )
}