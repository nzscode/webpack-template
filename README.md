# webpack-template

Template for web-publish ready html doc, with webpack install needed only

1.  Setting up the Git Repo:

    1. Make a new Git Repository with a README.md
    2. Using Git Clone and the SSH, clone the git repository to your preferred
       folder (repos)

2.  Open the repository in your IDE
3.  In the root folder make two folders: src, dist

    1. In the src folder make two files: index.js, index.html

4.  Make a .gitignore file in the root folder
    1. Open the .gitignore file and add "node_modules"
5.  Use CTRL ~ to open the Terminal in your IDE (VS CODE)

6.  To initalize the webpack setup : npm init -y
7.  To setup Webpack: npm install --save-dev webpack webpack-cli
8.  In the root folder create a file: webpack.config.js
9.  To the webpack.config.js file add the following code: It can also be copied
    from :
    https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin

        	const HtmlWebpackPlugin = require("html-webpack-plugin");
        	const path = require("path");

        	module.exports = {
        		entry: "./src/index.js",
        		plugins: [
            		new HtmlWebpackPlugin({
            		scriptLoading: "blocking", //adds script to end of body
        		template: "./src/index.html  //makes src>index.html the
        						editable template, and then
        						packs all the info into
        						dist>index.html for production
            		}),
        		],
        		output: {
            		filename: "main.js",
            		path: path.resolve(__dirname, "dist"),
            		clean: true,

    }, module: { rules: [ { test: /\.css$/i, use: ["style-loader",
    "css-loader"], }, ], }, };

10. To setup webpack to manage HTML: npm install --save-dev html-webpack-plugin
11. In package.json add a comma at the end of "scripts: { "test":... , "build":
    webpack", ...}
12. In the src folder create a style.css file
13. Make sure the necessary rules are in webpack.config.js for css
    1. Install the files needed to run CSS & Styles: npm install --save-dev
       css-loader style-leader
14. Import the css file into the index.js file using : import "./style.css" at
    the top of the file
15. To complete basic Build, npx webpack OR npm run build
16. for adding images, fonts, json, data. See:
    https://webpack.js.org/guides/asset-management/

17. To test if working, add boilerplate to src> index.html and a console.log
    statement to index.js For css testing, add a div componenet nad change its
    color to something using js then save each individual file and run npm run
    build

18. To publish the files through GitHub:
    1.
