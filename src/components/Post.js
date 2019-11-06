import React from 'react';
import Comment from './Comment';

function Post({post}){
  return (
    <div>
      <br/>
      <div className="card w-75 mx-auto">
        <div className="card-body">
        <img width="55" height="55" src={post.author.avatar} className="rounded-circle float-left" alt="..."/>
          <h6 className="card-title mt-2">
            <span className="pl-3">{post.author.name }</span>
          </h6>
          <h6 className="card-subtitle mb-1 text-muted">
            <span className="pl-3"><small>{post.date}</small></span>
          </h6>
          <br/>
          <p className="card-text">{post.content}</p>
          <hr />
          <small>
            {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Post;