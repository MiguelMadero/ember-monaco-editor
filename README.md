[![Build Status](https://travis-ci.org/MiguelMadero/ember-monaco-editor.svg?branch=master)](https://travis-ci.org/MiguelMadero/ember-monaco-editor)

# Ember-monaco-editor

An ember wrapper for the [monaco-editor](https://github.com/Microsoft/monaco-editor) (vs code's editor). From the monaco-editor's README "The Monaco Editor is the code editor that powers [VS Code](https://github.com/Microsoft/vscode), a good page describing the code editor's features is [here](https://code.visualstudio.com/docs/editor/editingevolved)".

```
{{monaco-editor language="javascript" value=code
  onChange=(action codeChanged)}}
```

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
