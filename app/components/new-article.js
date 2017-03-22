import Ember from 'ember';

export default Ember.Component.extend({
  addStory: false,
  actions: {
    showAddStoryForm() {
      this.set('addStory', true);
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
    }
  }
});
