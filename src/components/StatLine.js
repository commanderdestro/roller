import './StatLine.css';

const StatLine = ({ roll = 'doubles', countRolls, rolls }) => {
  return (
    <>
      <div className='stat-line'>
        {roll === 'doubles' ? (
          <>
            <div className='die' style={{ width: '70px' }}>
              {'Doubles'}
            </div>
          </>
        ) : roll === 'total' ? (
          <>
            <div className='die' style={{ width: '70px' }}>
              {'Total'}
            </div>
          </>
        ) : (
          <>
            <div className='die'>{roll[0]}</div>
            <div className='die'>{roll[1]}</div>
          </>
        )}
        <div className='count'>{`${countRolls(rolls, roll)}`}</div>
        {roll !== 'total' ? (
          <div className='percent'>{`${
            countRolls(rolls, roll) === 0
              ? '0'
              : Math.round((countRolls(rolls, roll) / rolls.length) * 100)
          }%`}</div>
        ) : null}
      </div>
    </>
  );
};

export default StatLine;
