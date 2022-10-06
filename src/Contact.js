import { useState } from 'react';

const Contact = () => {
  const [mailerState, setMailerState] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === 'success') {
          alert('Message Sent');
        } else if (resData.status === 'fail') {
          alert('Message failed to send');
        }
      })
      .then(() => {
        setMailerState({
          email: '',
          name: '',
          message: '',
        });
      });
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-sec-cont">
        <h5>Contact Me</h5>
        <form className="contact-form" onSubmit={submitEmail}>
          <input
            type="text"
            placeholder="Your Name"
            required
            onChange={handleStateChange}
            name="name"
            value={mailerState.name}
          />
          <input
            type="text"
            placeholder="Your Email"
            required
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          />
          <textarea
            type="text"
            placeholder="Message"
            required
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />
          <button id="submit-btn" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
