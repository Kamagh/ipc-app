import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { ipcRenderer } from '../common/global'


function App() {
    const [process, setProcess] = useState("nothing is happening now");
    const [data, setData] = useState("")
    return (
        <>
            <h2>Hey There</h2>
            <div>
                <button onClick={() => {
                    ipcRenderer.send("open:window");
                    setProcess("About window will be opened soon");
                    ipcRenderer.on("send:data", (evt, ...args) => {
                        setProcess(args[0]);
                    })
                }}>about</button> {/* setProcess(request is sent to the server, response is received from the server ) */}
            </div>
            <div>
                <button onClick={async () => {
                    ipcRenderer.send("get:data");
                    setProcess("request is sent to the server");

                    console.log(ipcRenderer.invoke("get:data"));
                    /*                         try {
                                                const result = await ipcRenderer.invoke("get:data");
                                            } catch(err) {
                                                console.log(err);
                                            } */

                    const result = await ipcRenderer.invoke("get:data");

                    console.log(result);
                    if (!result.isFulfilled) setProcess("still loading...");
                    console.log(result);
                    setData(result);
                    setProcess("response is received from the server");

                    //console.log("hasav")
                }}>data</button>
                <p>data: {data}</p>
            </div>
            <p>{process}</p>
        </>
    )
}

ReactDOM.render(<App />, document.body);
