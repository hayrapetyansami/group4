const path = require("path");

module.exports = {
	mode: "development", // production
	entry: "./src/js/app.js",
	output: {
		path: path.resolve(__dirname, "build/js"),
		filename: "all.js",
		clean: true
	},
	watch: true,
	devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)|(bower_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["@babel/preset-env", {
								debug: true,
								corejs: 3,
								useBuiltIns: "usage"
							}]
						]
					}
				}
			}
		]
	}
};