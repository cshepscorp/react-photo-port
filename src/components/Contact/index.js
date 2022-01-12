import React from 'react';
// import PhotoList from '../PhotoList';
// import { capitalizeFirstLetter } from '../../utils/helpers';


/* Notice that we named the function ContactForm, not Contact. The name of this function isn't critical and doesn't have to match the name of the component folder. But the name of the function needs to be in the export statement. */
function ContactForm() {
    // create the DOM elements in the contact form using JSX
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5"  />
                </div>
                <button type="submit">Submit</button>
          </form>
        </section>
      )
    }
    
    export default ContactForm;