import React from "react";


const Button = ({ styles }) => {
    return(
    <button type="button" className={`py-4 px6 
        bg-blue-gradient font-poppins font-medium text-[18px] text-primary 
        outline-none ${styles}`}>Get started</button>
    )
    }
export default Button