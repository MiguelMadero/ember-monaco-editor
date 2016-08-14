import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    codeChanged () {
      console.log('Code changed, handled by controller');
    }
  }
});
