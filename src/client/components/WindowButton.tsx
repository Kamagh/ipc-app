import { ipcRenderer } from "electron";
import * as React from "react";

interface WindowButtonProps {
    setProcess:  (value: React.SetStateAction<string>) => void;
}

export default function WindowButton({setProcess}: WindowButtonProps) {
    return (
        <div>
        <button onClick={() => {
            ipcRenderer.send("open:window");
            setProcess("About window will be opened soon");
            ipcRenderer.on("send:data", (evt, ...args) => {
                setProcess(args[0]);
            })
        }}>about</button> {/* setProcess(request is sent to the server, response is received from the server ) */}
    </div>
    )
}

/* export const WindowButton: React.FC<Props> = props => {
    return (
        <div>
            <button onClick={() => alert("as")}>props.name</button>
        </div>
    )
} */