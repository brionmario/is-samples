# WSO2 Identity Server OIDC React Sample

This sample will help you to test out the OAuth2 authorization code flow in a React SPA application using the WSO2 Identity Server.

> Read more about the OAuth 2.0 Authorization Code Grant from [here](https://is.docs.wso2.com/en/latest/learn/authorization-code-grant/)

## Pre-requisites

1. Install [node](https://nodejs.org/en/download/) if you haven’t already(npm is already bundled with node).
2. A running Identity Server. (If you want to build from source follow the instructions listed [here](https://github.com/wso2/product-is)).
3. IDE or code editor of your choice.

## Setting up the sample

You can fork the sample repo or directly clone and start working on it, but I suggest you create your own fork.

```bash
# clone the repository
git clone https://github.com/brionmario/is-samples.git

# change the directory
cd is-samples/react-oidc

# install the dependencies with npm
npm install
```

After all the node dependencies are being installed, you can configure the app settings.

Open the source code using an IDE/code editor and all the app configurations are available under the config.js file.

#### Follow the below steps to set up the application.

1. Copy the “OAuth Client Key” and “OAuth Client Secret” from the service provider that you created from the Management console.

2. Modify the CLIENT_ID and CLIENT_SECRET attributes of the config.js file.

3. Run the application.

From inside the react-oidc folder, execute the following command to run the application using webpack dev server.

```bash
npm run demo
```

or if you are using command prompt or powershell, use the following commands.

```bash
# For command prompt
npm run demo-cmd

#For power shell
npm run demo-pshell
```
If the browser window doesn’t open automatically, manually navigate to the https://localhost:9000.
