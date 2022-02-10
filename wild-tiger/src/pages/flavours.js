import React from 'react';
import FlavoursGallery from '../components/FlavoursGallery';

const Flavours = () => {
  return (
    <>
      <p className="font-montserrat text-center text-base md:text-lg px-8 pt-10 md:px-16 lg:px-48">
        Have a look below at some of my previous cakes and other sweet things to
        get an idea of what is available to order.<br/> Please note thats you are not
        limited to what is shown below and we are more than happy to discuss any
        idea that you have in mind, head on over to the Contact page to get in
        touch!
      </p>
      <FlavoursGallery />
    </>
  );
};

export default Flavours;
