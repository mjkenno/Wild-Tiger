import React from 'react';
import bear from '../images/gallery/Tiger - Coops.jpeg';
import flower from '../images/gallery/Tiger - Wedding flower.jpeg';
import unicorn from '../images/gallery/Tiger - Unicorn.jpeg';
import jpwedding from '../images/gallery/Tiger - JP.jpeg';
import nzgreen from '../images/gallery/Tiger - KM.jpeg';
import lavender from '../images/gallery/Tiger - Lavender.jpeg';
import rabbit from '../images/gallery/Tiger - Rabbit.jpeg';
import chocolate from '../images/gallery/Tiger - Choc.jpeg';
import weddingSemi from '../images/gallery/Tiger - Wedding semi.jpeg';
import stripe from '../images/gallery/Tiger - Stripe.jpeg';
import spiderman from '../images/gallery/Tiger - Spiderman.jpeg';
import sheep from '../images/gallery/Tiger - Sheep.jpeg';
import eucalyptus from '../images/gallery/Tiger - Eucalyptus.jpeg';
import manuka from '../images/gallery/Tiger - Manuka.jpeg';
import wedding from '../images/gallery/Tiger - Wedding2.jpeg';

const Cards = () => {
  const images = [
    { src: bear, alt: 'Bear and Balloon Cake', text: 'First Birthday Cake' },
    { src: flower, alt: 'Wedding Flower Cake', text: 'Wedding Cake' },
    {
      src: unicorn,
      alt: 'Unicorn Cake',
      text: 'Unicorn Cake',
    },
    { src: jpwedding, alt: 'Wedding Cake', text: 'Four Tier Wedding Cake' },
    {
      src: nzgreen,
      alt: 'New Zealand Wedding Cake',
      text: 'Aotearoa Wedding Cake',
    },
    { src: lavender, alt: 'Lavender Cake', text: 'Lavender Buttercream Cake' },
    { src: rabbit, alt: 'Peter Rabbit Cake', text: 'Peter Rabbit Cake' },
    {
      src: chocolate,
      alt: 'Chocolate Cake',
      text: 'Chocolate Cake',
    },
    {
      src: weddingSemi,
      alt: 'Semi Naked Wedding Cake',
      text: 'Semi Naked Wedding Cake',
    },
    {
      src: stripe,
      alt: 'Striped Celebration Cake',
      text: 'Striped Celebration Cake',
    },
    {
      src: spiderman,
      alt: 'Spiderman Birthday Cake',
      text: 'Spiderman Birthday Cake',
    },
    {
      src: sheep,
      alt: 'Sheep Celebration Cake',
      text: 'Sheep Celebration Cake',
    },
    {
      src: eucalyptus,
      alt: 'Eucalyptus Cake',
      text: 'Eucalyptus Cake',
    },
    {
      src: manuka,
      alt: 'Manuka Honey Cake',
      text: 'Manuka Honey Cake',
    },
    {
      src: wedding,
      alt: 'Wedding Cake',
      text: 'Wedding Cake',
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8 p-4 md:p-12">
      {images.map((image) => (
        <div className="w-full col-span-6 md:col-span-4 rounded overflow-hidden shadow-lg mr-4 relative flex flex-col">
          <img
            className="w-full object-scale-down max-h-full"
            src={image.src}
            alt={image.alt}
          />
          <div className="md:px-6 md:py-4 h-full">
            <h2 className="text-base md:text-lg lg:text-xl font-montserrat p-4 text-center text-cyan-dark">
              {image.text}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
