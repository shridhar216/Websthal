// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'; // Import the CSS module

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className={styles.contactForm}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Row 1 */}
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    name="name"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Please enter your name',
                      },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less',
                      },
                    })}
                    className={styles.formInput}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    name="email"
                    {...register('email', {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                    className={styles.formInput}
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>
                      Please enter a valid email address
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    name="subject"
                    {...register('subject', {
                      required: {
                        value: true,
                        message: 'Please enter a subject',
                      },
                      maxLength: {
                        value: 75,
                        message: 'Subject cannot exceed 75 characters',
                      },
                    })}
                    className={styles.formInput}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <span className={styles.errorMessage}>
                      {errors.subject.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 3 */}
              <div className="row">
                <div className="col">
                  <textarea
                    rows={3}
                    name="message"
                    {...register('message', {
                      required: true,
                    })}
                    className={styles.formInput}
                    placeholder="Message"
                  ></textarea>
                  {errors.message && (
                    <span className={styles.errorMessage}>
                      Please enter a message
                    </span>
                  )}
                </div>
              </div>

              <button
                className={`${styles.submitBtn} btn btn-primary`}
                disabled={disabled}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role="alert"
        >
          {alertInfo.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            }
          ></button>
        </div>
      )}
    </div>
  );
};

export default Contact;
