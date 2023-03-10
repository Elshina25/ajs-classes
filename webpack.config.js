module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './src/index.js',
  },
  output: {
    filename: './dist/main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
