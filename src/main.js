
const electron = require('electron')
const app = electron.app
const browser = electron.BrowserWindow
const countdown = require('./countdown.js');
const ipc = electron.ipcMain

let mainWindow
app.on ('ready', () => {
  mainWindow =new browser({
    //frame:false,
    titleBarStyle: 'hidden',
    height:1281,
    width:800,
    minWidth:800,
    minHeight:1281
  })


  mainWindow.loadURL (`file://${__dirname}/countdown.html`)

  mainWindow.on('closed',() => {
    console.log('closed');
    mainWindow = null
  })
})


ipc.on('countdown-start',() => {
  countdown(count => {
    //mainWindow.webContents.send('countdown',count’)
  })
  //console.log('caught it');
})
