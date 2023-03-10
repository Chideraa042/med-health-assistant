import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/home/Header';
import { VideoChat } from './components/WebRTC/videoChat/VideoChat';
import { Route, Routes } from 'react-router-dom';
import { ContextProvider } from './SocketContext';


function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
          <Route exact path='/' element={<Header />} />
          <Route exact path='/video' element={<ContextProvider><VideoChat /></ContextProvider> } />
      </Routes>

      
      
      
    </div>
  );
}

export default App;
