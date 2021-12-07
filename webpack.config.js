module.exports = {
    entry: { 
      index: '/src/app/index.js', 
      home: '/src/app/home.js',
      // rutas aqui
      // rutas aqui
    },
    output: {
      path: __dirname + '/src/public/js',
      filename: '[name].bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            }
          }
        },
        //source: https://webdevetc.com/programming-tricks/javascript/webpack/guide-to-webpack-css-style-loader/
        //install loaders in this way: npm install  style-loader css-loader -D
        {
          test: /\.css$/,
          // the order of `use` is important!
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        },
      ]
    }
  }