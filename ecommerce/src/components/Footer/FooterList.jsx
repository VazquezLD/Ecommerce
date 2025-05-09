import React, { Children } from "react";

export const FooterList = ( {children} ) => {
    return(
        <ul className="footerList">
           {children} 
        </ul>
    )
}