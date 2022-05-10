import Lockr from 'lockr';
import StatLine from './StatLine';
import LastFive from './LastFive';

const Stats = ({ playerName }) => {
  const rolls = Lockr.get(playerName);

  const countRolls = (rolls, roll = 'doubles') => {
    let count = 0;
    if (rolls && roll === 'doubles') {
      for (let i = 0; i < rolls.length; i++) {
        if (rolls[i][0].toString() === rolls[i][1].toString()) count += 1;
      }
    } else if (rolls && roll === 'total') {
      for (let i = 0; i < rolls.length; i++) {
        count += parseInt(rolls[i][0]);
        count += parseInt(rolls[i][1]);
        if (rolls[i][0].toString() === rolls[i][1].toString()) {
          count += parseInt(rolls[i][0]);
          count += parseInt(rolls[i][1]);
        }
      }
    } else if (rolls && roll !== 'doubles') {
      for (let i = 0; i < rolls.length; i++) {
        if (rolls[i][0] === roll[0] && rolls[i][1] === roll[1]) {
          count += 1;
        } else if (rolls[i][0] === roll[1] && rolls[i][1] === roll[0]) {
          count += 1;
        }
      }
    }
    return count;
  };

  const handleClear = _ => {
    Lockr.set(playerName, []);
    window.location.reload();
  };

  return (
    <>
      <div>{playerName}'s Roll History</div>
      <LastFive rolls={rolls} />
      <StatLine roll='doubles' rolls={rolls} countRolls={countRolls} />
      <StatLine roll='total' rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['1', '1']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['1', '2']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['1', '3']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['1', '4']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['1', '5']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['1', '6']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['2', '2']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['2', '3']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['2', '4']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['2', '5']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['2', '6']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['3', '3']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['3', '4']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['3', '5']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['3', '6']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['4', '4']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['4', '5']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['4', '6']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['5', '5']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['5', '6']} rolls={rolls} countRolls={countRolls} />
      <StatLine roll={['6', '6']} rolls={rolls} countRolls={countRolls} />
      <div></div>
      <button onClick={handleClear}>Clear History</button>
    </>
  );
};

export default Stats;
