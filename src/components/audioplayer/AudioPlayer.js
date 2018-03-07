import React from 'react';

const AudioPlayer = (props) => {

  function audioControl (playerId) {
    //console.log("Playing...", player);
    let player = document.getElementById(playerId),
    ctrl = document.getElementById(playerId+'_ctrl');

    if (ctrl.className == 'material-icons is_paused') {
      ctrl.className = 'material-icons';
      ctrl.innerText = 'play_arrow';
      player.pause();
    } else {
      ctrl.className = 'material-icons is_paused';
      ctrl.innerText = 'pause';
      player.play();
    }
    player.addEventListener('ended', () => {
      ctrl.className = 'material-icons';
      ctrl.innerText = 'play_arrow';
      player.currentTime = 0;
      player.pause();
    });
  }

  return (<div>
    <audio id={props.dua.id}>
      <source src={props.dua.mp3} type="audio/mpeg"/>
      Your browser does not support the audio element.
    </audio>
    <button onClick={audioControl.bind(this, props.dua.id)} className="audio-player"><i className="material-icons" id={props.dua.id + '_ctrl'}>play_arrow</i> <span>উচ্চারণ</span></button>
  </div>);
}

export default AudioPlayer;
