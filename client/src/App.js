import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/home/Header';
import { VideoChat } from './components/WebRTC/videoChat/VideoChat';
import { Route, Routes } from 'react-router-dom';
import { ContextProvider } from './SocketContext';
import { Login } from './components/login/Login';
import { ProfLogin } from './components/login/profLogin/ProfLogin';


import { Trial } from './components/dashboardd/Trial';
import { Calendar } from './components/dashboardd/Calendar';
import { Telecom } from './components/telecom/Telecom';

import { DocDashboard } from './components/dashboard/DocDashboard';
import { DocDash } from './components/dashboard/doc-dash/DocDash';

import { Dashboard } from './components/dashboard/Dashboard';
import { DashMain } from './components/dashboard/dash-main/DashMain';

import { DoctorList } from './pages/doctors/DoctorList';
import { Doctor1Profile } from './pages/doctorProfile/Doctor1Profile';
import { Doctor2Profile } from './pages/doctorProfile/Doctor2Profile';
import { Doctor3Profile } from './pages/doctorProfile/Doctor3Profile';
import { Doctor4Profile } from './pages/doctorProfile/Doctor4Profile';
import { VideoConf } from './pages/videoConferencing/VideoConf';




function App() {


  return (
    <div className="App">
      <Navbar />

      <Routes>
          <Route exact path='/' element={<Header />} />
          <Route exact path='/video' element={<ContextProvider><VideoChat /></ContextProvider> } />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/proLogin' element={<ProfLogin />} />

          {/* <Route exact path='/dash' element={<Dashboardd />} /> */}
          <Route exact path='/trial' element={<Trial />} />
          <Route exact path='/cal' element={<Calendar />} />
          <Route exact path='/telecom' element={<Telecom />} />

        {/* Doctor's Dashboard */}
          <Route exact path='/docDashboard' element={<DocDashboard />}>
            <Route path='docMain' element={<DocDash />} />

            <Route exact path='videoConf' element={<VideoConf /> } />
          </Route>
          

        {/* Patient's Dashboard */}
          <Route exact path='/dashboard' element={<Dashboard />}>
            <Route path='main' element={<DashMain />} />
            <Route path='doctors' element={<DoctorList />} />

            <Route path='profileD1' element={<Doctor1Profile />} />
            <Route path='profileD2' element={<Doctor2Profile />} />
            <Route path='profileD3' element={<Doctor3Profile />} />
            <Route path='profileD4' element={<Doctor4Profile />} />

            <Route exact path='videoConf' element={<VideoConf /> } />
            <Route exact path='video' element={<ContextProvider><VideoChat /></ContextProvider> } />
          </Route>

          <Route exact path='/dashMain' element={<DashMain />} />
          <Route exact path='/doctors' element={<DoctorList />} />
          <Route exact path='/profileD1' element={<Doctor1Profile />} />
          <Route exact path='/profileD2' element={<Doctor2Profile />} />
          <Route exact path='/profileD2' element={<Doctor3Profile />} />
          <Route exact path='/profileD2' element={<Doctor4Profile />} />
          <Route exact path='videoConf' element={<VideoConf /> } />
      </Routes>

      
      
      
    </div>
  );
}

export default App;
