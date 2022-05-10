import React from 'react';

const LastFive = ({ rolls }) => {
  const Die = num => {
    return <span className='die'>{num}</span>;
  };

  let output = [];
  if (rolls && rolls.length > 0) {
    for (let i = 1; rolls.length >= 6 ? i < 6 : i < rolls.length; i++) {
      output.push(() => (
        <div key={i}>
          <Die num={`${rolls[rolls.length - i][0]}`} />
          <Die num={`${rolls[rolls.length - i][1]}`} />
        </div>
      ));
    }
  }

  const LastRoll = ({ i }) => {
    return (
      <div key={i}>
        <Die num={`${rolls[i][0]}`} />
        <Die num={`${rolls[i][1]}`} />
      </div>
    );
  };

  //   return output;

  return (
    <div>
      <div>Last 5 rolls...</div>
      {console.log(
        rolls
          .slice(0)
          .reverse()
          .map((roll, i) => {
            if (roll.length > 0 && i < 6) {
              return <LastRoll i={i} />;
            } else return true;
          })
      )}
    </div>
  );
};

export default LastFive;
