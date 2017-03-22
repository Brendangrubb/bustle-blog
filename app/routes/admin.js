import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    saveArticle(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    },
    deleteArticle(article) {
      if (confirm("Are you absolutely, positively sure that you want to delete this article? I think it's some of your best work!")) {
        article.destroyRecord();
      }
    }
  }
});
