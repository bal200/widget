// vue.config.js
module.exports = {
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			// mutate config for production...
		} else if (process.env.NODE_ENV === 'development') {
			// mutate for development...
			config.devtool= 'source-map';
		}
	},
	filenameHashing: false,
	productionSourceMap: false,
	css: {
		extract: true,
		sourceMap: true,
	},
	chainWebpack: config => {
		config.optimization
			.splitChunks({
				minSize: 900000,
				// cacheGroups: {
				// 	vendors: {
				// 		name: 'chunk-vendors',
				// 		test: /[\\\/]node_modules[\\\/]/,
				// 		priority: -10,
				// 		chunks: 'initial'
				// 	},
				// 	common: {
				// 		name: 'chunk-common',
				// 		minChunks: 2,
				// 		priority: -20,
				// 		chunks: 'initial',
				// 		reuseExistingChunk: true
				// 	}
				// }
			});
	}
}