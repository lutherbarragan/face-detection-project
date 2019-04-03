import React from "react"

import "./Age.css"

export default ({age, percentage, index}) => {
    switch(index) {
        case (index % 2 === 0):
            return(
                <div className="data-bar odd">
                    <span className="data">{age} years old</span>
                    <span className="data">{Math.ceil(percentage * 100)}%</span>
                </div>
            )
            
        default:
            return(
                <div className="data-bar">
                    <span className="data">{age} years old</span>
                    <span className="data">{Math.ceil(percentage * 100)}%</span>
                </div>
            ) 
    }
}