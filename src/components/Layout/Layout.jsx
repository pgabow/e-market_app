import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='max-w-[1280px] mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export { Layout };
