import React from 'react';

const DuaSlide = (props) => {
  let duas = props.duas;
  let slides;

  if (duas) {
    slides = duas.map(dua => {
      return (<div className="section" key={dua.id}>
        <p className="arabic">{dua.ar}</p>
        <p className="bangla">{dua.bn}</p>
        <p className="dua-ref">[{dua.qref}]</p>
      </div>);
    });
  }

  return (<div id="fullpage" className="page-content">
    {slides}
  </div>);
};
export default DuaSlide;
