// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} unityWidgetName
 * @param {string} go
 * @param {string} methordName
 * @returns {Promise.<void>}
 */
export async function PauseGame(unityWidgetName, go, methordName) {
	// BEGIN USER CODE
	const instance = unityContext[unityWidgetName];
	instance.send(go, methordName);
	// END USER CODE
}