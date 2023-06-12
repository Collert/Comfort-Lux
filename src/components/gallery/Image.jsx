import React from "react";

export default function Image(props) {

    const [closing, setClosing] = React.useState(false)
    const [styles, setStyles] = React.useState(null)

    React.useEffect(() => {
        if (props.isActive) {
            setStyles({
                top:props.position.top,
                left:props.position.left
            })
            setTimeout(() => {
                setStyles({
                    top:"50vh",
                    left:"50vw"
                })
            }, 500);
        }
    },[props, props.isActive])

    function closeImage() {
        setClosing(true)
        setTimeout(() => {
            props.setActiveImage(null)
        }, 300);
    }

    var clickHandler;

    if (!props.activeImage) {
        clickHandler = props.expandImage;
    } else if (props.isActive) {
        clickHandler = closeImage;
    }

    return (
        <div style={styles} className={`gallery-image-wrapper ${props.isActive ? "active" : ""} ${closing ? "closing" : ""}`}>
            <img onClick={clickHandler} className="gallery-image" alt="illustration" src={props.src}/>
        </div>
    )
}