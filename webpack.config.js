const path = require('path');
const webpack = require('webpack');
var ETP = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



const NODE_ENV = process.env.NODE_ENV || 'development';


const src = path.join(__dirname,'src');


const conf = {
	context : src,
	entry : {
		main : './index.js',
		glob : './glob.js'
	},
	output : {
		filename : './js/[name].js',
		path : path.join(__dirname, 'root'),
		publicPath : '/'
	},
	module : {}
}


//-- DEVTOOL -------------------
conf.devtool = 'inline-source-map';

//--  LOADERS ------------------------------

conf.module.rules = [{
	test: /\.js$/,
	exclude: /node_modules/,
	use : [
	  {
	    loader : 'babel-loader',
	    options : {
	    	presets : [['env',{
	    		targets : {
	    			browsers : 'last 3 versions'
	    		}
	    	}],'react'],
	    	plugins : [["transform-object-rest-spread", { "useBuiltIns": true }],'transform-runtime']
	    }
	  }
	]
},{
	test: /\.css$/,
	use: ETP.extract({
	  fallback : 'style-loader',
	  use : [{
	    loader : 'css-loader',
	    options : {
	      sourceMap : false
	    }
	  },{
	  	loader : 'postcss-loader',
	  	options : {
	  		config : {
	  			path : path.join(__dirname,'postcss.config.js')
	  		}
	  	}
	  }]
	})
}]




//--  PLUGINS  ----------------------------  

conf.plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name : 'common'
  }),
  new ETP('./css/[name].css')
]

if (NODE_ENV == 'production') {
	conf.plugins.push(
		new UglifyJsPlugin({
		  	sourceMap : false,
		  	uglifyOptions : {
		  		ecma : 6
		  	}
		}))
}

conf.watch = NODE_ENV == 'development';




module.exports = conf