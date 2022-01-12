import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


/* Notice that we named the function ContactForm, not Contact. The name of this function isn't critical and doesn't have to match the name of the component folder. But the name of the function needs to be in the export statement. */
function ContactForm() {
    // create the DOM elements in the contact form using JSX
    // set the initial state to empty strings
    // three key-value pairs to represent the three user inputs: name, email, and message
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
    const [errorMessage, setErrorMessage] = useState(''); // initial state is an empty string; assign the value of errorMessage based on isValid value
    const { name, email, message } = formState;
    // sync the internal state of the component formState with the user input from the DOM. The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name; use the spread operator, ...formState, so we can retain the other key-value pairs in this object; without the spread op, the other values in formState would be overwritten, leaving only the name: value key pair
    function handleChange(e) {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log('isValid? ' + isValid);
        // isValid conditional statement
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      console.log('errorMessage', errorMessage);
      if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value }) // The name property of target in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.
      }
      
    }
    function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
    }
    //console.log(formState);
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    {/* add the attribute onChange to the <input> element for name, and assign a function to this attribute, aptly called handleChange */}
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                </div>
                {errorMessage && (
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
                <button type="submit">Submit</button>
          </form>
        </section>
      )
    }
    
    export default ContactForm;