/* globals monaco */

import Ember from 'ember';
import layout from '../templates/components/monaco-editor';

let monacoLoadingPromise;

export default Ember.Component.extend({
  layout,
  init () {
    this._super(...arguments);
    monacoLoadingPromise = monacoLoadingPromise || this._loadScript('/vs/loader.js');
    monacoLoadingPromise.then(()=>{
      window.require(['vs/editor/editor.main'], () => {
        if(typeof monaco !== "undefined") {
          // TODO: change this to use this.$().element or similar
          this.editor = monaco.editor.create(document.getElementById('container'), {
            value: this.get('code'),
            language: this.get('language')
          });
          this.editor.onDidChangeModelContent(()=> {
            this.sendAction('onChange', event.target.value);
          });
        }
      });
    });
  },
  willDestroyElement () {
    if (this.editor) {
      this.editor.destroy();
    }
  },
  _loadScript (url) {
    var scriptElement = Ember.$("<script>").prop({src: url, async: true});
    let promise = new Ember.RSVP.Promise((resolve, reject)=>{
      scriptElement.one('load', ()=> Ember.run(null, resolve));
      scriptElement.one('error', (evt)=> Ember.run(null, reject, evt));
    });
    document.head.appendChild(scriptElement[0]);
    return promise;
  },
});
