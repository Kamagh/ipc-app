import * as React from 'react';
import { ipcRenderer } from '../../common/global';

export default function WindowButton({ setProcess }: DataProps) {

    const openWindow = () => {
        try {
            ipcRenderer.send("open:window");
            setProcess("About window will be opened soon");

            ipcRenderer.on("send:data", (evt, ...args) => {
                setProcess(args[0]);
            })
        } catch (e) {
            console.log("Err emssage: ", e);
        }

    }

    return (
        <div>
            <button onClick={openWindow}>about</button>
        </div>
    )
}
