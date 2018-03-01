import React from 'react';

const MainNav = (props) => {

  let duas = props.data;
  let links;

  if(duas){
    links = duas.map(dua => {
     return (
       <a className="mdl-navigation__link" href={dua.id} key={dua.id}>{dua.qref}</a>
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
