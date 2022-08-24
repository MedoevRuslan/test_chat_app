import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='*' element={ <Chat /> } />
          {/* <Route path='/login' element={ <Login /> } /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App;
