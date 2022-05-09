import React from 'react';
import '../css/NavBar.css'

class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a className='nav-link' href={'/' + page}>
          {page.toLocaleUpperCase()}
        </a>
      )
    });

    return <nav className='nav-menu'>{navLinks}</nav>;
  }
}

export default NavBar;