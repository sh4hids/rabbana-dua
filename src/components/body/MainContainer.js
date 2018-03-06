import React from 'react';
import DuaSlide from './DuaSlide';

const MainContainer = (props) => (<main className="mdl-layout__content">
  <DuaSlide duas={props.data} />
</main>);

export default MainContainer;
