[![Build Status](https://travis-ci.org/MiguelMadero/ember-monaco-editor.svg?branch=master)](https://travis-ci.org/MiguelMadero/ember-monaco-editor)

# Ember-monaco-editor

**NOTE:** this is still work in progress. I need to address a conflict with the AMD loader and loader.js before releasing 0.1.0.

An ember wrapper for the [monaco-editor](https://github.com/Microsoft/monaco-editor) (vs code's editor). From the monaco-editor's README "The Monaco Editor is the code editor that powers [VS Code](https://github.com/Microsoft/vscode), a good page describing the code editor's features is [here](https://code.visualstudio.com/docs/editor/editingevolved)".

```
{{monaco-editor language="javascript" code=code
  onChange=(action codeChanged)}}
```

## Sample

It's simply VS Code. Keybindings work as well as other features. For example, cmd+d for multiple selections and multiple edits, intellisense, find all references, etc. 

![monaco-editor](https://cloud.githubusercontent.com/assets/47388/17669451/8a849b98-62c2-11e6-9915-5bcbb4b5f11e.gif)

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
