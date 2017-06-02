const path = require('path');
const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const _ = require('lodash');

const isProduction = process.env.NODE_ENV === 'prod';
const nowEnv = isProduction? 'prod' : 'dev';

const paths = {
  base: path.join(__dirname, 'config/webpack.base.js'),
  dev: path.join(__dirname, 'config/webpack.dev.js'),
  prod: path.join(__dirname, 'config/webpack.prod.js'),
};

const baseConfig = require(paths.base);
const enhancedConfig = require(paths[nowEnv]);

const config = _.assign(baseConfig, enhancedConfig);

module.exports = config;
