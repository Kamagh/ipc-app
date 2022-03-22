import * as React from 'react';
import { ipcRenderer } from '../../common/global';

export default function WindowButton({ setProcess }: DataProps) {
    return (
        <div>
            <button onClick={() => {
                ipcRenderer.send("open:window");
                setProcess("About window will be opened soon");
                ipcRenderer.on("send:data", (evt, ...args) => {
                    setProcess(args[0]);
                })
            }}>about</button>
        </div>
    )
}
