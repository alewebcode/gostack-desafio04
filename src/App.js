import React from 'react';

import Header from './components/Header';
import './App.css';
import PostList from './components/PostList';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle  } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle);

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