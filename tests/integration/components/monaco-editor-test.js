import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import getFrameById from 'ember-monaco-editor/utils/get-frame-by-id';
import wait from 'ember-test-helpers/wait';

moduleForComponent('monaco-editor', 'Integration | Component | monaco editor', {
  integration: true
});

test('it renders', function (assert) {
  this.set('code', 'myFunction().property;');
  let changedCode;
  this.set('codeChanged', (newCode)=>changedCode = newCode);
  this.render(hbs`{{monaco-editor language="javascript" code=code
    onChange=(action codeChanged)}}`);

  Ember.run.later(()=> {
    // NOTE: introduces an artifical wait to get a chance
    // for the editor to boot. This isn't promisey so ember won't
    // wait by default. We may be able to add an event and
    // promisify this....
  }, 500);
  return wait().then(()=>{
    const frame = getFrameById(this.$('.monaco-editor').attr('id'));
    const $wrapper = $(frame.document.getElementById('monaco-editor-wrapper'));
    const $textArea = $wrapper.find('textArea');
    // NOTE: these are implementation details of the monaco-editor,
    // it's fragile, but leaving it for now. If it brakes, just move away from this
    // approach
    assert.equal($textArea.val(), this.get('code'));
    // TODO: test the action firing. simply setting the value in the textarea doesnt work
  });
});
