import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  timestamp: DS.attr(),
  commentBody: DS.attr(),
  article: DS.belongsTo('article', {async: true})
});
