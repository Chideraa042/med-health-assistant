import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/home/Header';
import { VideoChat } from './components/WebRTC/videoChat/VideoChat';
import { Route, Routes } from 'react-router-dom';
import { ContextProvider } from './SocketContext';
import { Login } from './components/login/Login';
import Dashboardd from './components/dashboardd/Dashboardd';
import { Trial } from './components/dashboardd/Trial';
import { Calendar } from './components/dashboardd/Calendar';
import { Dashboard } from './components/dashboard/Dashboard';



function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
          <Route exact path='/' element={<Header />} />
          <Route exact path='/video' element={<ContextProvider><VideoChat /></ContextProvider> } />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/dash' element={<Dashboardd />} />
          <Route exact path='/trial' element={<Trial />} />
          <Route exact path='/cal' element={<Calendar />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>

      
      
      
    </div>
  );
}

export default App;
