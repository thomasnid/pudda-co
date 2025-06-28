import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Home = () => (
  <div>
    <Header />
    <main className='p-8 text-center'>
      <h1 className='text-3xl font-bold'>Welcome to Pudda & Co</h1>
      <p className='mt-4'>Business formation made simple, sexy, and secure.</p>
    </main>
    <Footer />
  </div>
);
export default Home;