import React from 'react';
import './App.css';

function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitle/>

            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    console.log('Rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function AppTitle() {
    console.log('AppTitle rendering')
    return <div>This is APP component</div>;
}

function Star() {
    console.log('Star rendering')
    return <div>Star</div>
}

function Accordion() {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle />
        <AccordionBody />
    </div>;
}

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return <h3>Меню</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
    </ul>
}

export default App;
