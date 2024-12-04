import {app, BrowserWindow} from 'electron'
import path from 'path'
import { isDev } from './util.js';
import { pollResources } from './resourceManager.js';


app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    if(isDev()){
        // mainWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html")); 
        mainWindow.loadURL('http://localhost:5124');
    } else {
        // mainWindow.loadURL('http://localhost:5124');
        mainWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html")); 
    }
    pollResources();
    
});