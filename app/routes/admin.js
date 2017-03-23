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
    },
    updateArticle(article, params) {
    Object.keys(params).forEach(function(key) {
    if(params[key]!==undefined) {
      article.set(key,params[key]);
    }
      });
      article.save();
      this.transitionTo('index');

    },
    hideAdd(){
      $(".addStory").hide();
    },
    hideUpdate(){
      $(".updateStory").hide();
    }
  }
});
