import { ipcRenderer, contextBridge, IpcRendererEvent, IpcRenderer } from "electron";

type IListener = (event: IpcRendererEvent, ...args: any[]) => void;

const globals = {
    ipcRenderer: {
        invoke(channel: string, ...args: any) {
            return ipcRenderer.invoke(channel, ...args);
        },

        send(channel: string, ...args: any) {
            ipcRenderer.send(channel, ...args);
        },

        on(channel: string, listener: IListener) {
            ipcRenderer.on(channel, listener);
        }
    }
}
console.log("asd");


contextBridge.exposeInMainWorld("bridge", globals);