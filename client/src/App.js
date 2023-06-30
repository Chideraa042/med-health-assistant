import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/home/Header';
import { VideoChat } from './components/WebRTC/videoChat/VideoChat';
import { Route, Routes } from 'react-router-dom';
import { ContextProvider } from './SocketContext';
import { Login } from './components/login/Login';
// import { Dashboardd } from './components/dashboardd/Dashboardd';
import { Trial } from './components/dashboardd/Trial';
import { Calendar } from './components/dashboardd/Calendar';
import { Dashboard } from './components/dashboard/Dashboard';
import { DashMain } from './components/dashboard/dash-main/DashMain';
import { DoctorList } from './pages/doctors/DoctorList';
import { Doctor1Profile } from './pages/doctorProfile/Doctor1Profile';
import { Doctor2Profile } from './pages/doctorProfile/Doctor2Profile';
import { Doctor3Profile } from './pages/doctorProfile/Doctor3Profile';
import { Doctor4Profile } from './pages/doctorProfile/Doctor4Profile';



function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
          <Route exact path='/' element={<Header />} />
          <Route exact path='/video' element={<ContextProvider><VideoChat /></ContextProvider> } />
          <Route exact path='/login' element={<Login />} />
          {/* <Route exact path='/dash' element={<Dashboardd />} /> */}
          <Route exact path='/trial' element={<Trial />} />
          <Route exact path='/cal' element={<Calendar />} />
          <Route exact path='/dashboard' element={<Dashboard />}>
            <Route path='main' element={<DashMain />} />
            <Route path='doctors' element={<DoctorList />} />

            <Route path='profileD1' element={<Doctor1Profile />} />
            <Route path='profileD2' element={<Doctor2Profile />} />
            <Route path='profileD3' element={<Doctor3Profile />} />
            <Route path='profileD4' element={<Doctor4Profile />} />

            <Route exact path='video' element={<ContextProvider><VideoChat /></ContextProvider> } />
          </Route>
          <Route exact path='/dashMain' element={<DashMain />} />
          <Route exact path='/doctors' element={<DoctorList />} />
          <Route exact path='/profileD1' element={<Doctor1Profile />} />
          <Route exact path='/profileD2' element={<Doctor2Profile />} />
          <Route exact path='/profileD2' element={<Doctor3Profile />} />
          <Route exact path='/profileD2' element={<Doctor4Profile />} />
      </Routes>

      
      
      
    </div>
  );
}

export default App;
