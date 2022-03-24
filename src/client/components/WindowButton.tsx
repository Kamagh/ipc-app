import * as React from 'react';
import { ipcRenderer } from '../../common/global';

export default function WindowButton({ setProcess }: DataProps) {

    const openWindow = () => {
        try {
            ipcRenderer.send("open:window");
            setProcess("About window will be opened soon");
        } catch (e) {
            console.log("Err emssage, could't open the window from the server: ", e);
        }

        try {
            ipcRenderer.on("send:data", (evt, ...args) => {
                setProcess(args[0]);
            })
        } catch (e) {
            console.log("Err emssage, couldn't recieve the data from the server: ", e);
        }

    }

    return (
        <div>
            <button onClick={openWindow}>about</button>
        </div>
    )
}
