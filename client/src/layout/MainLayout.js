import React from 'react';
import { Outlet } from 'react-router-dom';
import SecondaryHeader from '../components/Header/SecondaryHeader';
import PrimaryHeader from '../components/Header/PrimaryHeader';

const MainLayout = () => {
  return (
    <>
        <PrimaryHeader />
        <Outlet />
    </>
  )
}

export default MainLayout