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
              
          }, (error) => {
              console.log(error.text);
              toast.error('error')
          });
      };


  return (
    <div>
      <form ref={form} onSubmit={sendEmail}
      className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <input placeholder="message" className="textarea" />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Submit;
