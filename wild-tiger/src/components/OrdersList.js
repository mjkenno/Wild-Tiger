import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrdersList = ({ numberOfOrders }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  const url = 'http://localhost:1337/api/orders/';

  useEffect(() => {
    // Fetch orders fronm Strapi and set as state.
    const fetchOrders = async () => {
      const response = await axios.get(url);
      // Not sure why data object is nested? Usually just response.data?
      setOrders(response.data.data);
    };

    fetchOrders().catch((err) => {
      setError(err);
    });
    // Set the number of orders as dependency as so when this changes it triggers rendering. Passed down from OrderForm.js
  }, [numberOfOrders]);

  if (error) return <div>Problem fetching your orders - {error.message}</div>;

  return (
    <div className="border mx-12 mb-4">
      <h1 className="text-cyan-dark text-xl flex justify-center my-4">
        - Your Enquiries -
      </h1>
      <div>
        {Object.values(orders).map((order) => (
          <div key={order.id} className="flex-col font-montserrat mb-6">
            <div className="flex justify-center items-center mb-1">
              <h3 className="px-2 ml-2 font-bold text-cyan-dark">Name:</h3>
              <p>
                {order.attributes.name} {order.attributes.surname}
              </p>
              <h3 className="px-2 ml-2 font-bold text-cyan-dark">Email:</h3>
              <p>{order.attributes.email}</p>

              <h3 className="px-2 ml-2 font-bold text-cyan-dark">Phone: </h3>
              <p>{order.attributes.phone ? order.attributes.phone : 'N/A'}</p>
            </div>

            <div className="flex justify-center items-center">
              <h3 className="px-2 ml-2 font-bold text-cyan-dark">Size: </h3>
              <p>{order.attributes.size}</p>
              <h3 className="px-2 ml-2 font-bold text-cyan-dark">Flavour: </h3>
              <p>{order.attributes.flavour}</p>
            </div>

            {order.attributes.message && (
              <div className="flex justify-center items-center">
                <h3 className="px-2 ml-2 font-bold text-cyan-dark">
                  Message:
                </h3>
                <p>{order.attributes.message}</p>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
