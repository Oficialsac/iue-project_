const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

function onReady(){
    win = new BrowserWindow({       
        width: 1000,
        height: 680,
        minWidth: 1000,
        minHeight: 680,
        maxWidth: 1000,
        maxHeight: 680,
    })

    win.loadURL(url.format({
        pathname: path.join(
            __dirname,'dist/iue-app/index.html'
        ),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', onReady)