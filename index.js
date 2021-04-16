// https://github.com/GoogleCloudPlatform/functions-framework-nodejs
// npx @google-cloud/functions-framework --target=getseer
// https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27
// at about:inspect (or chrome://inspect) click on "Open dedicated DevTools for Node" 
// node --inspect node_modules/@google-cloud/functions-framework --target=getseer


exports.getseer = (req, res) => {
    let msg = `Hello from getseer at ${Date()}`
    debugger
    res.send(msg);
};