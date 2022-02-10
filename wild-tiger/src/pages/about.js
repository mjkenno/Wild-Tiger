import React from 'react';
import HeroImage from '../components/HeroImage';

const About = () => {
  return (
    <>
      <div className="h-96">
        <HeroImage />
      </div>

      <div className=" bg-gray-50 mt-44">
        <h2 className="text-cyan-dark font-montserrat text-center text-base md:text-lg lg:text-2xl p-2 pt-6">
          About
        </h2>
        <p className="font-montserrat text-center text-base md:text-lg pt-4 px-8 md:px-16 lg:px-56">
          Having baked cakes, cookies and cupcakes for friends and family from a
          young age, and a major sweet tooth, I soon found that baking and
          designing cakes was a huge passion in life.
        </p>
        <p className="font-montserrat text-center text-base md:text-lg px-8 md:px-16 lg:px-56">
          After returning from Europe where I spent 12 years learning my craft
          in some of the finest bakeries and cake shops in England, Spain and
          France, I have settled in the Kapiti Coast and I can not wait to share
          some delicious cakes and other sweet treats with you!
        </p>
        <p className="font-montserrat text-center text-base md:text-lg px-8 mb-4 pb-10 md:mb-8 md:px-16 lg:px-56">
          From bespoke wedding and celebration cakes, to cupcakes, macarons and
          cookies, I love baking it all. So please get in touch and lets talk
          about what you have in mind for that next special day!
        </p>
      </div>
    </>
  );
};

export default About;
