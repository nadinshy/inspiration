import { useEffect, useState } from 'react';
import video from './earth-small.mp4';
import './App.css';

function App() { 

  const[tips, setTips] = useState("");


  useEffect(() => {
    getTips()
  }, [])
    const getTips = async () => {
      const response = await fetch (`http://www.boredapi.com/api/activity/ `);
      const data = await response.json();
      setTips(data.activity);
    };
    

  return (
    <div className="App">
     <div className='container'>
     <video autoPlay muted loop>
      <source src={video} type="video/mp4"/>
      </video>
      <h1>Ask Me And Get An Inspiration...</h1>
     </div>
        <div className='container'>
      <button className='button-85' onClick={getTips}>A S K</button>
      </div>
      <div className='container'>
     <p className='tips'>{tips}</p>
     </div>
    </div>
    
  );
}

export default App;
