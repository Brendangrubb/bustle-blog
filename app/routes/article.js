import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },
  actions: {
    postComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var article = params.article;
      article.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return article.save();
      });
    },
    deleteComment(comment) {
      comment.destroyRecord();
    }
  }
});
