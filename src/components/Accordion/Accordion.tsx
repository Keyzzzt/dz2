import React from "react";

type AccordionPropsType = {
    title: string
}
export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody />
    </div>;
}

type AccordionTitle = {
    title: string
}
function AccordionTitle(props: AccordionTitle) {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
    </ul>
}