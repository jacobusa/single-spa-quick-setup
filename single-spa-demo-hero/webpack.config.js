const { mergeWithRules, merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { EnvironmentPlugin } = require("webpack");
const webpack = require("webpack");

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: "single",
		projectName: "hero",
		webpackConfigEnv,
		argv,
	});
	return mergeWithRules({
		module: {
			rules: {
				test: "match",
				use: "replace",
			},
		},
	})(defaultConfig, {
		plugins: [
			// ...
			// new webpack.DefinePlugin({
			// 	"process.env": JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
			// }),
			// new EnvironmentPlugin({
			// 	REACT_APP_ENV: "dev",
			// 	CLOUDFRONT_URL: "http://localhost:8080/public",
			// }),
			// ...
		],
		// externals: [/^@jacobusa\/.+/],
		// customize the webpack config here
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [
						require.resolve("style-loader", {
							paths: [require.resolve("webpack-config-single-spa")],
						}),
						require.resolve("css-loader", {
							paths: [require.resolve("webpack-config-single-spa")],
						}),
						"postcss-loader",
					],
				},
				{
					test: /\.svg$/,
					use: ["@svgr/webpack"],
				},
			],
		},
	});
	// return merge(defaultConfig, {
	// 	// modify the webpack config however you'd like to by adding to this object
	// 	externals: [/^@jacobusa\/.+/],
	// 	module: {
	// 		rules: [
	// 			{
	// 				test: /\.css$/i,
	// 				use: [
	// 					require.resolve("style-loader", {
	// 						paths: [require.resolve("webpack-config-single-spa")],
	// 					}),
	// 					require.resolve("css-loader", {
	// 						paths: [require.resolve("webpack-config-single-spa")],
	// 					}),
	// 					"postcss-loader",
	// 				],
	// 			},
	// 			{
	// 				test: /\.svg$/,
	// 				use: ["@svgr/webpack"],
	// 			},
	// 		],
	// 	},
	// });
};
