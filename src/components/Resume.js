import React from "react"
import resume from "../images/Fernando_Estrada_Resume.pdf"

export default function Resume(){
    return (
        <div className="download-resume">
            <a href={resume} download>Download Resume <i class="fas fa-download"></i></a>
        </div>
        
    )
}