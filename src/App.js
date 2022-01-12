/* This App.js file is the center of the application. Think of App.js as the root component, or the wrapper component that houses all of the other components. To effect any change on the application, we need to either modify this file or add components inside it. */
import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

// the way React uses JSX behind the scenes is very similar to document.createElement()
function App() {
  const [contactSelected, setContactSelected] = useState(false); // prevent the contact form from showing when a user initially navigates to the homepage
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {/* if the contactSelected is false, the Gallery and About components should be rendered, but if contactedSelected is true, the ContactForm component should be rendered. */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            {/* Because components look just like any other JSX element (maybe colored slightly different by the syntax highlighter), using PascalCase can help you distinguish them from other JSX elements. */}
          </>
        ) : (
            <ContactForm></ContactForm>
        )}
        {/* Notice the <> and </> that wrap the Gallery and About components. Can you imagine what these are and what they might be for? They are called React fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>. */}
      </main>
    </div>
  );
}

export default App;
