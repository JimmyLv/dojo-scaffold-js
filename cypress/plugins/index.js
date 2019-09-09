// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const webpack = require('@cypress/webpack-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default
const task = require('cypress-skip-and-only-ui/task')
const { initPlugin: initSnapshotsPlugin } = require('cypress-plugin-snapshots/plugin')

const webpackOptions = {
  // https://webpack.js.org/configuration/node/
  // avoid winston logger problem
  // https://github.com/percy/percy-cypress/issues/58
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-runtime',
          ],
        },
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}

const options = {
  // send in the options from your webpack.config.js, so it works the same
  // as your app's code
  webpackOptions,
  watchOptions: {},
}

module.exports = (on, config) => {
  initSnapshotsPlugin(on, config)
  // on('task', task)
  // on('file:preprocessor', webpack(options))
  // on('file:preprocessor', cucumber())
  // custom tasks for sending and reporting code coverage
  // on('task', require('@cypress/code-coverage/task'))
  // this line instruments spec files and loaded unit test code
  /*on(
    'file:preprocessor',
    require('@cypress/code-coverage/use-browserify-istanbul')
  )*/
  return config
}
