import React from "react";
import './Hero.css'

export const Hero = ({children}) => {
    return(
        <div className="heroSection">{children}</div>
    )
}