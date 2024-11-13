import React from 'react';
import { useState } from 'react';
// import "./styles1.css"

function Text(){
    return(
        <div>
            <TextExpander>
                space tracl is the ultimeate adventue! Imagin soraing and exprloring  new  worls .Its the stuf
                of dreama dnas but belibe it sor not space terace is a real 
                thing are constantly venturing out into the cosmos to unveove
                push the boundariries of what's possible
            </TextExpander>

            <TextExpander
            collapseNumWords={20}
            expandButtonText="Show text"
            collapseButtonText="Collapse text"
            buttonCollor="#ff6622">

            Space tracel require some serious amzing technology
            collabration between countries, private companies,
            space organisartion .And while it's not always easy
            result are out of this world.Think about the first
            foot on the moon or whn rovers were sent roamaround
        
                </TextExpander>
                <TextExpander expanded={false} className="b0x">
                Space tracel require some serious amzing technology
            collabration between countries, private companies,
            space organisartion .And while it's not always easy
            result are out of this world.Think about the first
            foot on the moon or whn rovers were sent roamaround
        

                </TextExpander>
        </div>
    )
}


function TextExpander({
    expandButtonText= "showm more",
    collapseButtonText="Show more ",
    buttonCollor,
    buttonInline,
    expanded=false,
    className,
    children
}){

    const [isExpanded, setIsExpanded] = useState(expanded)
 const  displayText = isExpanded ? children : "test"
 
 return <div className={className}>
    <span>{children}</span>
 <button>{collapseButtonText}</button>
 </div>
}

export default Text;
