import './App.css';

import Player from './components/Player';

function App() {
  return (
    <div className='container'>
      <div className='player-container'>
        <Player className='player' placeholder='Player1' />
        <Player className='player' placeholder='Player2' />
      </div>
    </div>
  );
}

export default App;
