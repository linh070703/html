const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');


module.exports = {
  mode: 'production', // 開発時も圧縮させるためにproductionを指定
  entry: {
    effect: './assets/js/effect.js',
    loading: './assets/js/loading.js',
    scrollEffect: './assets/js/scrollEffect.js',
    style: './assets/sass/style.scss',
    'editor-style': './assets/sass/editor-style.scss',
    // ビルドするファイルを追加する場合は、ここにインプットファイルを設定
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/min/[name].min.js',
  },
  module: {
    rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,  // CSSを別ファイルへ書き出し
            {
              loader: 'css-loader', // CSSをCommonJSに変換
              options: {
                url: false, // url()を変換しない
                sourceMap: true // developmentモードではソースマップ対応
              }
            },
            {
              loader: 'sass-loader',  // sassコンパイル
              options: {
                sourceMap: true, // developmentモードではソースマップ対応
                sassOptions: {
                  outputStyle: "compressed",
                },
              }
            }
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader", // Babel。JSのES6をES5に変換
            options: {
              presets: [
                "@babel/preset-env"
              ]
            }
          }
        },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({  // CSSを別ファイルへ書き出し
      filename: 'css/[name].css',
    }),
    new RemoveEmptyScriptsPlugin(), // 空のJSスクリプト除去
    new FixStyleOnlyEntriesPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({  // JSの圧縮（productionモードの時のみ）
        terserOptions: {
          sourceMap: true,
        },
      }),
    ]
  },
  watchOptions: {
    ignored: /node_modules/   // watchの際にnode_modules配下ソースを除外
  },
  target: ["web", "es5"], // ES5に対応
  devtool: 'source-map',  // developmentモードではソースマップ対応
};
