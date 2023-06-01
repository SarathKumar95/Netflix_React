import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {originals,action,comedy,romance,documentaries} from './urls';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title='Netflix Orginals' />
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={romance} title='Romance' isSmall/>
      <Rowpost url={comedy} title='Comedy' isSmall />
      <Rowpost url={documentaries} title='Documentries' isSmall />
    </div>
  );
}

export default App;
