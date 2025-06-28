import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
const Services = () => {
  const services = [
    { title: 'Starter LLC Kit', features: ['LLC', 'EIN', 'Operating Agreement', 'Registered Agent'], price: 204, link: '#' },
    { title: 'Virtual Biz Launch Kit', features: ['LLC', 'EIN', 'Virtual Address', 'Phone', 'Email', 'Google Profile'], price: 365, link: '#' }
  ];
  return (
    <div>
      <Header />
      <main className='p-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {services.map((s, i) => <ServiceCard key={i} {...s} />)}
      </main>
      <Footer />
    </div>
  );
};
export default Services;