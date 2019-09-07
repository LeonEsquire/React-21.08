import React, { Component } from 'react'
import PostItem from './PostItem';

export default class PostsList extends Component {
  render() {
    if (!this.props.posts.length) {
      return null;
    }

    const posts = this.props.posts.map(post => {
      return <PostItem key={post.id} {...post} />
    })

    return (
      <div>
        <h1>Посты</h1>
        <div>
          {posts}
        </div>
      </div>
    )
  }
}
