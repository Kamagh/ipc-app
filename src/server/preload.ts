import { ipcRenderer, contextBridge } from "electron";

const APP_BRIDGE = {
    getData: (): Promise<string> => ipcRenderer.invoke("GET/data")  //returns a promise   
}

export default APP_BRIDGE;
//window-api 
contextBridge.exposeInMainWorld("bridge", APP_BRIDGE);