import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import GettingData from './components/GettingData';
import WindowButton from './components/WindowButton';


function App() {
    const [process, setProcess] = useState("nothing is happening now");
    return (
        <div>
            <h2>Hey There</h2>
            <WindowButton setProcess={setProcess} />
            <GettingData setProcess={setProcess} />
            <p>{process}</p>
        </div>
    )
}

ReactDOM.render(<App />, document.body);
