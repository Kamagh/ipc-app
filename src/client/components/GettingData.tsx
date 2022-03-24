import * as React from 'react';
import { useState } from 'react';
import { ipcRenderer } from '../../common/global';


export default function GettingData({ setProcess }: DataProps) {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        ipcRenderer.send("get:data");
        setProcess("request is sent to the server");

        try {
            setLoading(true)
            const result = await ipcRenderer.invoke("get:data");

            if (!result.isFulfilled) setProcess("still loading...");
            setData(result);
            setProcess("response is received from the server");
        } catch (e) {
            console.log("Err emssage: couldn't recieve the data from the server", e);

        } finally {
            setLoading(false)

        }
    }



    return (
        <div>
            <button onClick={getData}>data</button>
            <p>data: {data}</p>
            {loading && <p>still loading...</p>}
        </div>
    )
}
