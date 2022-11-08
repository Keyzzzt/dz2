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
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Users'} collapsed={true}/>
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
