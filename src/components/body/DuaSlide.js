import React from 'react';
import AudioPlayer from '../audioplayer/AudioPlayer';

const DuaSlide = (props) => {
  let duas = props.duas;
  let slides;

  if (duas) {
    slides = duas.map(dua => {
      return (<div className="section" key={dua.id}>
        <p className="arabic">{dua.ar}</p>
        <p className="bangla">{dua.bn}</p>
        <p className="dua-ref">[ {dua.qref} ]</p>
        <AudioPlayer dua={dua}/>
      </div>);
    });
  }

  return (<div id="fullpage" className="page-content">
    {slides}
  </div>);
};

export default DuaSlide;
