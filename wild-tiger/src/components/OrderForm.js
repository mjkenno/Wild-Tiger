import React, { useState } from 'react';
import axios from 'axios';
import OrdersList from '../components/OrdersList';

const OrderForm = () => {
  // Initial form state object to pass initially and to reset the form after submittion.
  const initialFormState = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    size: '',
    flavour: '',
    message: '',
  };

  const [formState, setformState] = useState(initialFormState);
  const [message, setMessage] = useState(null);
  const [numberOfOrders, setNumberOfOrders] = useState(0);

  const url = 'http://localhost:1337/api/orders/';

  // Email validation using RegEx
  const validateEmail = (email) => {
    // eslint-disable-next-line
    const emailRegEx = RegExp(/^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/);
    return emailRegEx.test(email);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // Setting the form state as the payload for Strapi. Needed to be under the data property, otherwise the POST request was failing.
    const strapiPayload = { data: formState };

    if (!validateEmail(formState['email'])) {
      setMessage({
        class: 'bg-red-500 opacity-80',
        text: "Oops, looks like you're email isn't in the right format.",
      });
      return;
    }

    try {
      // POST to strapi, if response is OK update the order count and display thank you message.
      const response = await axios.post(url, strapiPayload);
      if (response.statusText === 'OK') {
        setNumberOfOrders(numberOfOrders + 1);
        setMessage({
          class: 'bg-cyan-dark opacity-80',
          text: 'Thank you! I will be get back to you as soon as I can.',
        });
      }
    } catch (error) {
      // If there is an error - display the error message.
      console.log(error);
      setMessage({
        class: 'bg-red-500 opacity-80',
        text: `I'm sorry something went wrong - ${error.message}`,
      });
      return;
    }

    setformState(initialFormState);
  };

  // onChange update the form state by shallow copying, updating the copy and setting the copy as the new state. 
  const updateForm = (e) => {
    const { id, value } = e.target;
    const updatedFormState = { ...formState };
    updatedFormState[id] = value;
    setformState(updatedFormState);
  };

  return (
    <>
      {message && (
        <div className="flex justify-center items-center">
          <div
            className={`my-4 text-gray-100 text-center px-6 py-2 rounded-md absolute ${message.class}`}
          >
            {message.text}
          </div>
        </div>
      )}

      <div className="flex justify-center items-center mt-12 mb-6">
        <form
          onSubmit={submitForm}
          className="flex-col w-5/6 md:w-4/6 lg:w-3/6 m-4 text-gray-500 items-center"
          autoComplete="off"
        >
          <div className="flex w-full">
            <div className="relative my-4 border-b-2 focus-within:border-cyan-dark m-6 w-1/2">
              <input
                onChange={updateForm}
                type="text"
                className="form-input"
                id="name"
                name="name"
                value={formState.name}
                placeholder=" "
                required
              />
              <label className="form-label" htmlFor="name">
                Name *
              </label>
            </div>

            <div className="relative my-4 border-b-2 focus-within:border-cyan-dark m-6 w-1/2">
              <input
                onChange={updateForm}
                type="text"
                className="form-input"
                id="surname"
                name="surname"
                value={formState.surname}
                placeholder=" "
              />
              <label className="form-label" htmlFor="surname">
                Surname
              </label>
            </div>
          </div>

          <div className="flex w-full">
            <div className="relative my-4 border-b-2 focus-within:border-cyan-dark m-6 w-1/2">
              <input
                onChange={updateForm}
                type="text"
                className="form-input"
                id="email"
                name="email"
                placeholder=" "
                value={formState.email}
                required
              />
              <label className="form-label" htmlFor="email">
                Email *
              </label>
            </div>

            <div className="relative my-4 border-b-2 focus-within:border-cyan-dark m-6 w-1/2">
              <input
                onChange={updateForm}
                type="text"
                className="form-input"
                id="phone"
                name="phone"
                value={formState.phone}
                placeholder=" "
              />
              <label className="form-label" htmlFor="phone">
                Phone
              </label>
            </div>
          </div>

          <div className="flex w-full">
            <select
              id="size"
              onChange={updateForm}
              value={formState.size}
              required
              className="w-1/2 border-b mx-5 my-2 py-2 bg-gray-50 font-montserrat uppercase text-sm font-semibold rounded outline-none focus-within:border-cyan-dark"
            >
              <option value="" disabled>
                Size *
              </option>
              <option value='6"'>6"</option>
              <option value='8"'>8"</option>
              <option value='10"'>10"</option>
            </select>

            <select
              id="flavour"
              onChange={updateForm}
              value={formState.flavour}
              required
              className="w-1/2 border-b mx-5 my-2 py-2 bg-gray-50 font-montserrat uppercase text-sm font-semibold rounded outline-none focus-within:border-cyan-dark"
            >
              <option value="" disabled>
                Flavour *
              </option>
              <option value="Coconut & Raspberry">Coconut & Raspberry</option>
              <option value="Orange & Earl Grey">Orange & Earl Grey</option>
              <option value="Red Velvet">Red Velvet</option>
              <option value="Chocolate & Peanut Butter">
                Chocolate & Peanut Butter
              </option>
              <option value="Coffee & Hazelnut">Coffee & Hazelnut</option>
              <option value="Classic Vanilla">Coconut & Raspberry</option>
              <option value="Carrot & Walnut">Carrot & Walnut</option>
              <option value="Oreo">Oreo</option>
            </select>
          </div>

          <div className="relative my-4 border-b-2 focus-within:border-cyan-dark m-6 w-6/6">
            <textarea
              onChange={updateForm}
              style={{ resize: 'vertical' }}
              className="block
            w-full
            appearance-none
            bg-transparent
            rounded
            focus:bg-gray-50
            focus:outline-none
            origin-0
            duration-300
            text-md
            font-montserrat
            font-black
            tracking-wide"
              cols="50"
              rows="5"
              id="message"
              value={formState.message}
              placeholder=" "
            ></textarea>
            <label className="form-label" htmlFor="messsage">
              MESSAGE
            </label>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="font-montserrat text-xl font-black transition duration-200 hover:text-cyan-dark"
            >
              - SEND -
            </button>
          </div>
        </form>
      </div>
      <OrdersList numberOfOrders={numberOfOrders} />
    </>
  );
};

export default OrderForm;
