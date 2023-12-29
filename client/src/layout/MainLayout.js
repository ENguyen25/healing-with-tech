import React from 'react';
import { Outlet } from 'react-router-dom';
import PrimaryHeader from '../components/HeaderDesktop/PrimaryHeader';

const MainLayout = () => {
  return (
    <>
      {window.innerWidth > 600 ? <PrimaryHeader /> : ''}
      <Outlet />
    </>
  )
}

export default MainLayout