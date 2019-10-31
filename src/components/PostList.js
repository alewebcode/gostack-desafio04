import React,{ Component } from 'react';
import Post from './Post';

//import profile from '../assets/Bearded_Man.png';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://randomuser.me/api/portraits/men/62.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, vocês já aprenderam Nodejs?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://randomuser.me/api/portraits/men/21.jpg"
            },
            content: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          },
          {
            id: 2,
            author: {
              name: "José das coves",
              avatar: "https://randomuser.me/api/portraits/men/3.jpg"
            },
            content: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          }

        ]
      },
      {
        id: 2,
        author: {
          name: "Alexandre",
          avatar: "https://randomuser.me/api/portraits/men/80.jpg"
        },
        date: "05 Jun 2019",
        content: "Pessoal, alguém aí já aprendeu React?",
        comments: [
          {
            id: 2,
            author: {
              name: "Eduardo Ezequiel",
              avatar: "https://randomuser.me/api/portraits/men/79.jpg"
            },
            content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
          }
        ]
        // Restante dos dados de um novo post
      }
    ]
  };
  render(){
    return (
        <div>
          
              {this.state.posts.map(post => <Post key={post.id} post={post} /> )}
              
           
          {/* <div class="card w-50">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Button</a>
            </div>
          </div> */}
        </div>
      
    );
  }

}

export default PostList;