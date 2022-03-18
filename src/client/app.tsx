import * as React from 'react';
import * as ReactDOM from 'react-dom';
import api from './api';

let data = "";
const getDataView = async () => {
    //console.log(await api.getData());
    data = await api.getData(); 
    console.log(data);
    return data;
}


function App() {
    return (
        <>
            <h2>Hey There</h2>
            <button onClick={() => alert("wnd1")}>about</button>
            <button onClick={() => alert(getDataView()/* (async () =>  await api.getData())() */)}>data</button>
            <p>what's happening now</p>
        </>
    )
}

ReactDOM.render(<App/>, document.body);
