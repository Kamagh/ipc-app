import * as React from 'react';
import { useState } from 'react';
import { ipcRenderer } from '../../common/global';


export default function GettingData({ setProcess }: DataProps) {
    const [data, setData] = useState("")

    return (
        <div>
            <button onClick={async () => {
                ipcRenderer.send("get:data");
                setProcess("request is sent to the server");

                 /*try {
                    const result = await ipcRenderer.invoke("get:data");
                } catch (err) {
                    console.log(err);
                } */

                const result = await ipcRenderer.invoke("get:data");

                if (!result.isFulfilled) setProcess("still loading...");
                setData(result);
                setProcess("response is received from the server");
            }}>data</button>
            <p>data: {data}</p>
        </div>
    )
}
