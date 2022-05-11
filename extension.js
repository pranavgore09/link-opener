// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const cp = require('child_process');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations !!! Again, your extension "link-opener" is now active!');

	var urlRegex = /(https?:\/\/[^\s]+)/g;

	function cleanup(url) {
		return url.replace("\"", "")
	}

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('link-opener.openlinks', function () {
		// The code you place here will be executed every time your command is executed
		var urls = []
		if (vscode.window.activeTextEditor) {
			current_docuemnt = vscode.window.activeTextEditor.document
			console.log(current_docuemnt)
			if (current_docuemnt !== undefined) {
				filetext = current_docuemnt.getText()

				filetext.replace(urlRegex, function (url) {
					// console.log("url=", url)
					urls.push(cleanup(url))
				})
				if (urls.length != 0) {
					console.log("Found URLs", urls)
					cmd = "xargs -n1 firefox -new-tab <<< \"" + urls.join(" ") + "\""
					console.log("FIRE=>", cmd)
					cp.exec(cmd, { shell: '/bin/bash' }, (error, stdout, stderr) => {
						if (error) {
							console.error(`exec error: ${error}`);
							vscode.env.openExternal(vscode.Uri.parse(urls[0]));
							vscode.window.showInformationMessage('First Link Opened!');
							return;
						}
						console.log(`stdout: ${stdout}`);
						console.error(`stderr: ${stderr}`);
					});
					vscode.window.showInformationMessage('Links Opened!');
				} else {
					vscode.window.showInformationMessage('No Links Found!');
					console.log("nothing_found")
				}
			} else {
				console.log("no_current_doc")
			}
		} else {
			console.log("no_active_text_editor")
		}

	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
