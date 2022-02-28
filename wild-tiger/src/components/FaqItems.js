import React from 'react';

const FaqItems = () => {
  const faqs = [
    {
      id: 1,
      title: 'Consultations',
      description: `Due to varying times needed for each individual order, I prefer to have a consultation to get a better feel for what is required for your cake. 
        This means I also get a better feeling for what it is you are after. Please get in contact with me by using the form on the Contact page to set up a consultation regarding your order.`,
    },
    {
      id: 2,
      title: 'Allergy Information',
      description: `All cakes are made in a small kitchen where nuts, peanuts, eggs, milk, soya, sesame and gluten are used. 
      For this reason, we cannot guarantee they are free from traces of these allergens. I take all the necessary steps to ensure cross-contamination doesn't happen, 
      however, there is always a risk that one of our products has come into contact with another product.`,
    },
    {
      id: 3,
      title: 'Storage & Shelf Life',
      description: `It is  recommended to eat cakes on the day of collection to enjoy them at their best! 
      The cake is best stored in its box at room temperature or in the fridge if the weather is warm. 
      Please note, if your cake has a plaque or other decorations, these mightl become soft if stored in the fridge for longer than two hours.`,
    },
    {
      id: 4,
      title: 'Pricing',
      description: `Prices for orders will depend a few different factors - size, complexity, figurines etc. -
      Everything will be discussed and agreed during our intial consultation.`,
    },
    {
      id: 5,
      title: 'Free-From & Vegan Orders',
      description: `I can cater for all types of dietary requirements, with nearly all of the flavour options able to be made gluten free and plenty of options for other free-from goodies.
      When making contact, just detail what can't be eaten and I will get back to you with what can be done. Please note that as per our allergy information I can not 100% guarantee that there are not trace elements within the kitchen.`,
    },
  ];

  return (
    <div className="py-2">
      {faqs.map((faq) => (
        <div key={faq.id}>
          <h2 className="font-montserrat text-center text-base md:text-lg lg:text-2xl p-2 text-cyan-dark">
            {faq.title}
          </h2>
          <p className="font-montserrat text-center text-base md:text-lg mb-4 md:mb-8">
            {faq.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FaqItems;
