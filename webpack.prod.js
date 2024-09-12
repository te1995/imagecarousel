const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js', // Contenthash for better caching
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: false, // Remove source maps for smaller prod bundle
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: {
        removeComments: true, // Remove comments
        collapseWhitespace: true, // Minify HTML
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Extract CSS into separate files
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extract CSS into a separate file
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: true, // Minify HTML files
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]', // Cache busting for images
        },
        use: [
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true, // Enable minimization
    minimizer: [
      new TerserPlugin({
        parallel: true, // Faster minification with multiple threads
      }),
      new CssMinimizerPlugin(), // Minify CSS
    ],
    splitChunks: {
      chunks: 'all', // Split vendor code into separate chunks
    },
    runtimeChunk: 'single', // Separate runtime code to improve caching
  },
};
