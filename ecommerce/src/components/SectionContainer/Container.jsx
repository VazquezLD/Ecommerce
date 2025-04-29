import React from "react";
import './Container.css'

export const Container = ({children}) => {
    return(
        <section className="Container">
            {children}
        </section>
    )
}