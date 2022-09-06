import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from './components/Chat';

function App() {

  console.log('router render');

  // const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
  //     console.log(phase);
  // }

  return (
    <BrowserRouter>
        <Routes>
          <Route path='*' element={ <Chat /> } />
          {/* <Route path='/login' element={<Login />}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App;
