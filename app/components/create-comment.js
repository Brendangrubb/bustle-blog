import Ember from 'ember';

export default Ember.Component.extend({
  addComment: false,
  actions: {
    openCommentForm() {
      this.set('addComment', true);
    },
    postComment(article) {
      var params = {
        commentBody: this.get('commentBody'),
        user: this.get('user'),
        timestamp: "this is the time",
        article: this.get('article')
      };
      this.sendAction('postComment', params);
      this.set('addComment', false);
    }
  }
});
