import Ember from 'ember';

export default Ember.Controller.extend({
  init () {
    debugger;
  },
  actions: {
    codeChanged () {
      console.log('Code changed, handled by controller');
    }
  }
});
