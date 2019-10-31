import React from  'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(){
  return(
    <nav className ="navbar navbar-light bg-primary">
      <span className ="navbar-brand mb-0 h1 bg-primary text-white">React Community</span>
      <span className="pull-right"><a className="navbar-brand text-white" href="#"><small>Meu perfil <FontAwesomeIcon
    icon="user"/></small></a></span>
    </nav>

  )
}

export default Header;