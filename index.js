/* jshint node: true */
'use strict';

var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
// var debug = require('broccoli-stew').debug;
var environment;

function enifedFormatter (babel) {
  var t = babel.types;

   return new babel.Plugin('define-to-enifed2', {
     visitor: {
       CallExpression: function(node){
         if (t.isIdentifier(node.callee, {name: 'define'})){
           node.callee = t.identifier('enifed2');
         }
       },
       BlockStatement: function(){
         this.skip();
       }
     }
   });
}

module.exports = {
  name: 'ember-monaco-editor',

  included: function (parent) {
    parent.options.fingerprint = parent.options.fingerprint || {};
    parent.options.fingerprint.exclude = parent.options.fingerprint.exclude || [];
    // the monaco-editor loader doesn't work with fingerprinted assets (yet),
    // so we exclude it.
    parent.options.fingerprint.exclude.push('ember-monaco-editor/vs');

    // Adds a plugin to rename defined and require to avoid conflicts
    parent.options.babel = parent.options.babel || {};
    parent.options.babel.plugins = parent.options.babel.plugins || [];
    parent.options.babel.plugins.push({ transformer: enifedFormatter, position: 'after' });

    // TODO: disable uglify for CSS and JS to speed up the build and:
    // [WARN] `ember-monaco-editor/vs/editor/editor.main.js` took: 87370ms (more than 20,000ms)

    // TODO: consider lazy-loading the loader using the LoaderService
    // parent.import('vendor/ember-monaco-editor/vs/loader.js');
    // parent.import('vendor/ember-monaco-editor/vs/editor/editor.main');
  },
  config: function(env, appConfig) {
    environment = env;
  },
  treeForPublic: function () {
    var publicTree = this._super.treeForPublic.apply(this, arguments);
    return mergeTrees([new Funnel(this._getMonacoEditorModulePath(), {
        destDir: 'vs'
    }), publicTree]);
  },
  // treeForVendor: function () {
  //   // TODO: remove this if we lazy-load
  //   var vendorTree = this._super.treeForPublic.apply(this, arguments);
  //   return debug(mergeTrees([new Funnel(this._getMonacoEditorModulePath(), {
  //       destDir: 'ember-monaco-editor/vs',
  //       // include: ['loader.js*']
  //   }), vendorTree]), {name: 'my-app-name'});
  // },

  _getMonacoEditorModulePath: function () {
    var monacoEditorModulePath = 'node_modules/monaco-editor';
    return environment !== 'production' ?
      monacoEditorModulePath + '/dev/vs' :
      monacoEditorModulePath + '/min/vs';
  }
};
