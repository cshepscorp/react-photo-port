import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]); // if currentCategory changes, re-render the component so that the change in document.title will be visible to the user


    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    {/* if val of contactSelected is true, user has selected Contact, add the CSS class navActive */}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {/* Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique. This helps React keep track of items in the virtual DOM */}
                    {/* When you map over an array in a JSX expression, you should return only a single JSX element—like how you can only return a single element from a React component. */}
                    {categories.map((category) => (
                        // navActive class value is assigned only if Contact hasn't been selected and the current category HAS been selected
                    <li className={`mx-1 ${
                        currentCategory.name === category.name && !contactSelected && `navActive`
                        }`} key={category.name} 
                    >
                        {/* The onClick() attribute is expecting a callback function declaration. It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well. */}
                        <span
                            onClick={() => {
                            setCurrentCategory(category);
                            setContactSelected(false);
                            }}
                        >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;