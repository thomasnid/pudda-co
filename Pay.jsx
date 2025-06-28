import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Pay = () => {
  const [code, setCode] = useState('');
  const links = {
    'INV-2045': 'https://buy.stripe.com/test_link_2045',
    'INV-3650': 'https://buy.stripe.com/test_link_3650'
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (links[code]) window.location.href = links[code];
    else alert('Invalid Code');
  };
  return (
    <div>
      <Header />
      <main className='p-8 text-center'>
        <h2 className='text-2xl mb-4'>Enter Your Invoice Code</h2>
        <form onSubmit={handleSubmit} className='space-x-2'>
          <input type='text' value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} className='border px-4 py-2 rounded' placeholder='e.g. INV-2045' />
          <button type='submit' className='bg-black text-white px-4 py-2 rounded'>Pay Now</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};
export default Pay;