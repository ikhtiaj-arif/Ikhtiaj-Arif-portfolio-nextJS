import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Submit = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h4xgp3n', 'template_aad9kfz', form.current, '9gCFMkYrekME55uoH')
          .then((result) => {
              console.log(result.text);
              toast.success('success')
              e.terger.reset()
              
          }, (error) => {
              console.log(error.text);
              toast.error('error')
          });
      };


  return (
    <div className='p-10  shadow-2xl rounded-2xl'>
      <h1 className='text-4xl font-medium text-center text-teal-500'>Get In Touch</h1>
      <form ref={form} onSubmit={sendEmail}
      className="card flex-shrink-0 w-full md:w-3/4 lg:w-2/4 mx-auto ">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <input placeholder="message" className="border rounded-lg px-4 py-2 w-full pb-12" required/>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white font-medium px-4 py-2 border-none rounded-lg ml-8 hover:bg-gradient-to-l ">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Submit;
