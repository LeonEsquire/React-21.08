import React, { Component } from 'react';

import { addPost, getPosts } from '../actions/actionCreators';
import PostStore from '../stores/postStore';
import PostsList from '../components/PostsList';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.onPostChange = this.onPostChange.bind(this);
    this.newPost = this.newPost.bind(this);
  }

  onPostChange() {
    const posts = PostStore.posts;
    this.setState({ posts })
  }

  newPost() {
    const body = "Текст добавленного поста"
    const userId = 1;
    const title = 'Мой пост'

    addPost(title, userId, body);
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
        <PostsList posts={this.state.posts} />
      </div>
    )
  }

  componentDidMount() {
    getPosts();
    PostStore.on('change', this.onPostChange);
  }
}
