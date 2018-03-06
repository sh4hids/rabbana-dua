import React from 'react';

const MainNav = (props) => {

  let duas = props.data;
  let links;

  if(duas){
    let x = 0;
    links = duas.map(dua => {
      x++;
     return (
       <a className="mdl-navigation__link" href={'#dua' + x} key={dua.id}>{dua.qref}</a>
     );
   });
  }

  return (
    <div className="mdl-layout__drawer">
      <nav className="mdl-navigation" id="menu">
        {links}
      </nav>
    </div>
  );
};

export default MainNav;
