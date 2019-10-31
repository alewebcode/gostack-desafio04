import React from 'react';

function Comment({comment}){
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-md-1 mt-1">
        <img width="45" height="45" src={comment.author.avatar} className="rounded-circle float-left mt-0" alt="..."/>
        </div>
        <div className="col-md-11">
        <p className="card-text mt-3 bg-light rounded-lg">
        <span className="pl-1 "><strong>{comment.author.name}</strong> {comment.content}</span>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;