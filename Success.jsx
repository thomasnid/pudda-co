import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Success = () => (
  <div>
    <Header />
    <main className='p-8 text-center'>
      <h1 className='text-3xl font-bold text-green-600'>Payment Successful!</h1>
      <p className='mt-4'>Thank you for choosing Pudda & Co.</p>
    </main>
    <Footer />
  </div>
);
export default Success;