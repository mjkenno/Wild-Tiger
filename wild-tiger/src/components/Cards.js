import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');

  const localHost = 'http://localhost:1337';
  const url = 'http://localhost:1337/api/images';

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(url);
      // Not sure why data object is nested? Usually just response.data?
      setPhotos(response.data.data);
    };

    fetchImages().catch((err) => {
      setError(err);
    });
  }, []);

  if (error) return <div>Problem fetching - {error.message}</div>;

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8 p-4 md:p-12">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="w-full col-span-6 md:col-span-4 rounded overflow-hidden shadow-lg mr-4 relative flex flex-col"
        >
          <img
            className="w-full object-scale-down max-h-full"
            src={`${localHost}${photo.attributes.src}`}
            alt={photo.attributes.alt}
          />
          <div className="md:px-6 md:py-4 h-full">
            <h2 className="text-base md:text-lg lg:text-xl font-montserrat p-4 text-center text-cyan-dark">
              {photo.attributes.heading}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;