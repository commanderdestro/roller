import './App.css';

import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

import Player from './components/Player';

function App() {
  return (
    <div className='container'>
      <EditText id='wager-box' className='wager' placeholder='Wager' />
      <div className='player-container'>
        <Player className='player' placeholder='Player1' />
        <Player className='player' placeholder='Player2' />
      </div>
    </div>
  );
}

export default App;
