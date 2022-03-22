import { IpcRenderer } from "electron";

declare const bridge: any;

export const ipcRenderer: IpcRenderer = bridge.ipcRenderer;
