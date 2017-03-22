import Ember from 'ember';

export default Ember.Component.extend({
  addStory: false,
  actions: {
    showAddStoryForm() {
      this.set('addStory', true);
      this.sendAction('hideUpdate');
    },
    showUpdateStoryForm() {
      this.set('addStory', true);
      this.sendAction('hideAdd');
    },
    saveArticle() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        teaser: this.get('teaser'),
        body: this.get('body'),
        image: this.get('image'),
        tags: this.get('tags'),
        category: this.get('category'),
      };
      this.sendAction('saveArticle', params);
    },
    updateArticle(article) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        teaser: this.get('teaser'),
        body: this.get('body'),
        image: this.get('image'),
        tags: this.get('tags'),
        category: this.get('category'),
      };
      this.sendAction('updateArticle', article, params);
    },

  }
});
