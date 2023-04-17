import React from "react";
import Image from "./Image";

export default function FullGallery (props) {

    let images = []

    for (let i = 1; i <= 14; i++) {
        let path = `./irl_examples/${i}.jpg`
        images.push(<Image src={path}/>)
    }

    return (
        <div className="full-gallery">
            <nav>
            <span onClick={props.closeGallery} className="material-symbols-outlined">
                close
            </span>
            </nav>
            <div className="gallery-content">
                {images}
            </div>
        </div>
    )
}