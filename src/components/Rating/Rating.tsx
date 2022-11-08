import React from "react";


type RatingPropsType = {
    value: number
}
export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>

        </div>
    );
}

type StarPropsType = {
    selected: boolean
}
function Star(props: StarPropsType) {
    console.log('Star rendering')
    return props.selected ? <span><b>Star </b></span> : <span>Star </span>
}