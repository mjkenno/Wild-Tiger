import React, { useState } from 'react';

const ContactForm = () => {
  const initialFormState = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formState, setformState] = useState(initialFormState);
  const [message, setMessage] = useState(null);

  const validateEmail = (email) => {
    // eslint-disable-next-line
    const emailRegEx = RegExp(/^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/);
    return emailRegEx.test(email);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const payload = { ...formState };

    if (!validateEmail(payload['email'])) {
      setMessage({
        class: 'bg-red-500 opacity-80',
        text: "Oops, looks like you're email isn't in the right format.",
      });
      return;
    }
    setMessage({
      class: 'bg-cyan-dark opacity-80',
      text: 'Thank you! I will be get back to you as soon as I can.',
    });
    // e.currentTarget.submit();
    setformState(initialFormState);
  };

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

      <div className="flex justify-center items-center my-12">
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
              required
            ></textarea>
            <label className="form-label" htmlFor="messsage">
              MESSAGE *
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
    </>
  );
};

export default ContactForm;
