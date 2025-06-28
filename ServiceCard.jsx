import React from 'react';
const ServiceCard = ({ title, features, price, link }) => (
  <div className='border p-4 rounded-xl shadow-md'>
    <h2 className='text-xl font-bold'>{title}</h2>
    <ul className='my-2 list-disc list-inside'>{features.map((f, i) => <li key={i}>{f}</li>)}</ul>
    <button className='mt-4 bg-black text-white px-4 py-2 rounded' onClick={() => window.location.href = link}>Pay ${price}</button>
  </div>
);
export default ServiceCard;