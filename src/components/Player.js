import React, { useState } from 'react';

import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import './Player.css';

import Die from './Die';
import Stats from './Stats';
import Dice from '../assets/dice.svg';

import Lockr from 'lockr';

const Player = ({ placeholder }) => {
  const [roll, setRoll] = useState(['0', '0']);
  const [playerName, setPlayerName] = useState(placeholder);
  
  const handleRoll = dieNum => {
    setRoll(prev => [prev[1], dieNum]);
  };

  const handleClear = _ => {
    setRoll(['0', '0']);
  };

  const handleDiceRoll = _ => {
    let min1 = Math.ceil(1);
    let max1 = Math.floor(6);
    let min2 = Math.ceil(1);
    let max2 = Math.floor(6);
    let roll1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    let roll2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    setRoll([roll1.toString(), roll2.toString()]);
  };

  const handlePlayerName = _ => {
    let pName = document.querySelector(`#${placeholder}`)?.value;
    if (!Lockr.get(pName)) Lockr.set(pName, []);
    setPlayerName(pName);
  };

  const saveRoll = _ => {
    if (roll[0] === '0' || roll[1] === '0') return;
    if (Lockr.get(playerName)) {
      const currRolls = Lockr.get(playerName);
      currRolls.push(roll);
      Lockr.set(playerName, currRolls);
    } else {
      Lockr.set(playerName, [roll]);
    }
    clearRoll();
  };

  const clearRoll = _ => {
    setRoll([0, 0]);
  };

  return (
    <span className='playerContainer'>
      <EditText
        className='playerName'
        id={placeholder}
        placeholder={placeholder}
        onSave={handlePlayerName}
      />
      <div>
        <Die playerName={playerName} num='1' onClick={handleRoll} roll={roll} clear={handleClear} />
        <Die playerName={playerName} num='2' onClick={handleRoll} roll={roll} clear={handleClear} />
      </div>
      <div>
        <Die playerName={playerName} num='3' onClick={handleRoll} roll={roll} clear={handleClear} />
        <Die playerName={playerName} num='4' onClick={handleRoll} roll={roll} clear={handleClear} />
      </div>
      <div>
        <Die playerName={playerName} num='5' onClick={handleRoll} roll={roll} clear={handleClear} />
        <Die playerName={playerName} num='6' onClick={handleRoll} roll={roll} clear={handleClear} />
      </div>
      <img alt='dice' src={Dice} onClick={handleDiceRoll} style={{ width: '75px' }} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button id={`${placeholder}save`} className='save' onClick={saveRoll}>
          Save
        </button>
        <button id={`${placeholder}save`} className='save' onClick={clearRoll}>
          Clear
        </button>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Stats playerName={playerName} />
      </div>
    </span>
  );
};

export default Player;
