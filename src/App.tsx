import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'This is OOO component'}/>
            <Rating value={4}/>
            <Rating value={3}/>
            <Accordion title={'Accordion'}/>
        </div>
    );
}

type PageTitleProps = {
    title: string
}
function PageTitle (props: PageTitleProps) {
    console.log('AppTitle rendering')
    return <div>{props.title}</div>;
}

export default App;
