import React from 'react';
import OrderForm from '../components/OrderForm';
import Socials from '../components/Socials';

const Orders = () => {
  return (
    <>
      <Socials />
      <p className="font-montserrat text-center text-base md:text-lg py-8 px-8 md:px-24 lg:px-56">
        If there's something you fancy, or maybe you have that special occaison
        on the horizon, please get in touch and I will get back to you as soon
        as I can to see how I can help.
      </p>
      <OrderForm />
    </>
  );
};

export default Orders;
