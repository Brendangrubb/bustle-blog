import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  teaser: DS.attr(),
  body: DS.attr(),
  image: DS.attr(),
  tags: DS.attr(),
  category: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
