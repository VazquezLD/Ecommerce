import React from "react";
import './LinkContainer.css'

export const LinkBox = ({img, titulo}) => {
    return (
        <div className="linkBox">
            <img src={img} alt="icono" className="iconoLink"/>
            <span className="linkSpan">{titulo}</span>
        </div>
    )
}