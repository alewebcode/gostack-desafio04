import React from 'react';

import Header from './components/Header';
import './App.css';
import PostList from './components/PostList';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);

function App(){
  return(
    <div>
      <Header />
      <div className="container">
        <PostList/>
      </div>
      <Footer />
    </div>
   );

}

export default App;