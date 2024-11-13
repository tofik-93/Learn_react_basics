import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

export default function StarRating({totalStars = 5}){
    const [selectedStarts] = useState(3);
    const createArray = length=> [...Array(length)]
    const Star = ({selected = false}) =>(
        <FaStar color={selected ? "red" :"grey"} />
    )
    return(
        <>[
        <FaStar color="red" />
        <FaStar color="red" />
        <FaStar color="red" />
        <FaStar color="grey" />
        <FaStar color="grey" />]
        {createArray(totalStars).map((n,i)=>(
      <Star key={i} selected={selectedStarts >i}/>
      ))}
      <p>{selectedStarts} of {totalStars}</p>
        </>
    )
}
