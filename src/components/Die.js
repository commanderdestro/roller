import './Die.css';

const Die = ({ playerName, num, onClick, roll, clear }) => {
  let numRoll = 0;

  if (roll[0] && roll[0] === num) {
    numRoll += 1;
  }
  if (roll[1] && roll[1] === num) {
    numRoll += 1;
  }

  const handleClick = _ => {
    if (numRoll === 2) {
      clear();
    } else {
      onClick(num);
    }
  };

  return (
    <>
      <button className={`rolled${numRoll}`} id={`${playerName}-${num}`} onClick={handleClick}>
        {num}
      </button>
    </>
  );
};

export default Die;
