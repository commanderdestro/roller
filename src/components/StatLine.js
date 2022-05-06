import './StatLine.css';

const StatLine = ({ roll, countRolls, rolls }) => {
  return (
    <>
      <div className='stat-line'>
        <div className='die'>{roll[0]}</div>
        <div className='die'>{roll[1]}</div>
        <div className='count'>{`${countRolls(rolls, roll)}`}</div>
        <div className='percent'>{`${
          countRolls(rolls, roll) === 0
            ? '0'
            : Math.round((countRolls(rolls, roll) / rolls.length) * 100)
        }%`}</div>
      </div>
    </>
  );
};

export default StatLine;
