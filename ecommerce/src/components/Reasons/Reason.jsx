import React from "react";
import './ReasonsContainer.css'

export const Reason = ({pathImg, titulo, description}) => {
    return(
        <div className="reason">
            <img src={pathImg} alt="Icono" />
            <span className="tituloReason">{titulo}</span>
            <span className="descReason">{description}</span>
        </div>
    )
}