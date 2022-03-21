import { IpcRenderer } from "electron";

declare const bridge: any;

console.log("br", bridge);

export const ipcRenderer: IpcRenderer = bridge.ipcRenderer;
