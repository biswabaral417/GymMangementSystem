import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AdminLayout from './admin/AdminLayout';
import StaffLayout from './staffs/StaffsLayout';
import UserLayout from './user/UserLayout';
import MainContextProvider from './admin/contexts/MainContext';


function App() {
  const [pathName, setPathName] = useState(window.location.pathname);

  useEffect(() => {
    // Update the pathName state when the location changes
    const handleLocationChange = () => {
      setPathName(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <BrowserRouter>
      {pathName.includes("/admin") ? (
        <MainContextProvider>
          <AdminLayout />
        </MainContextProvider>
      ) : pathName.includes("/staff") ? (
        <StaffLayout />
      ) : (
        <UserLayout />
      )}
    </BrowserRouter>
  );
}

export default App;
