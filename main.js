const {app, screen, BrowserWindow} = require("electron")
const path = require('path')
const createWindow=()=>{
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.loadFile("index.html")
}

require("electron-reload")(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

app.on("ready", createWindow)