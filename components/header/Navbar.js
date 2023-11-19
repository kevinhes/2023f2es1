import React from 'react';

export const Navbar = () => {
  const navbarList = [
    { name: '候選人主張', link: '#' },
    { name: '最新活動', link: '#' },
    { name: '政策議題', link: '#' },
    { name: '小額捐款', link: '#' },
    { name: '服務信箱', link: '#' },
  ];
  return (
    <ul className='list-unstyled navbar me-5'>
      {
        navbarList.map( ( nav, index ) => {
          return (
            <li className='nav-item'>
              <a href={nav.link} className='nav-link'>{nav.name}</a>
            </li>
          )
        } )
      }
    </ul>
  )
}
