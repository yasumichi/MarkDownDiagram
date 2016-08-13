// Load electron modules
const {app, BrowserWindow} = require('electron');

// Load node native module
const path = require('path');

// Create window
var mainWindow = null;

function createWindow() {
	// Create a instance of BrowserWindow
	mainWindow = new BrowserWindow({
    width: 800, height: 600,
    // See http://electron.atom.io/docs/faq/#i-can-not-use-jqueryrequirejsmeteorangularjs-in-electron
    webPreferences: {
      nodeIntegration: false
    }
  });

	// Load mainwindow.html
  let URL = path.join('file://', path.resolve(__dirname, '../index.html'));
	mainWindow.loadURL(URL);

	// Destroy when window is closed
	mainWindow.on('closed', function() {
		mainWindow = null;
	})
}

// Show window when app is ready.
app.on('ready', function() {
	createWindow();
})

// Exit application when all window is closed.
app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') {
		app.quit();
	}
})

