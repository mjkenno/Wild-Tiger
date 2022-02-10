import React from 'react';

const FlavourGallery = () => {
  const flavours = [
    {
      name: 'Coconut & Raspberry',
      description:
        'Coconut sponge baked with whole raspberries, layered with raspberry compote and finished with raspberry buttercream.',
    },
    {
      name: 'Orange & Earl Grey Tea',
      description:
        'Orange sponge drizzled with orange syrup, layered with a citrus curd and finished with an Earl Grey tea buttercream.',
    },
    {
      name: 'Red Velvet',
      description:
        'Classic red velvet sponge, layered and finished with a buttermilk and white chocolate buttercream.',
    },
    {
      name: 'Choclate & Peanut Butter',
      description:
        'Dark chocolate sponge layered with peanut butter icing and sticky caramel and finished with more peanut butter icing.',
    },
    {
      name: 'Coffee & Hazelnut',
      description:
        'Coffee and hazelnut sponge, layered with plum jam and finished with a dark chocolate icing.',
    },
    {
      name: 'Carrot & Walnut',
      description:
        'Lightly spiced carrot cake with walnuts and orange, layered and finished with a velvety cream cheese icing.',
    },
    {
        name: 'Classic Vanilla',
        description:
          'Classic vanilla sponge filled and finished with a vanilla bean icing.',
    },
    {
      name: 'Oreo',
      description:
        'Oreo overload! - Oreo sponge, layered and filled with Oreo icing!',
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 lg:gap-x-12 md:gap-y-8 p-6 lg:p-12">
     {flavours.map((flavour) => (
          <div>
          <h2 className="text-base md:text-lg lg:text-2xl font-montserrat p-1 mt-2 text-center text-cyan-dark">
            {flavour.name}
          </h2>
          <p className="font-montserrat text-center text-base px-8 md:text-lg">
            {flavour.description}
          </p>
        </div>
     ))}
    </div>
  );
};

export default FlavourGallery;
