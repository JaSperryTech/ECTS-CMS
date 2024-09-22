import React, { useState, useEffect } from "react";
import "../styles/styles-light.css";
import "../styles/styles-dark.css";

const Header = () => {
  const [theme, setTheme] = useState("light");

  // Apply the theme by updating the class of the html element
  useEffect(() => {
    document.documentElement.className = theme; // Set class on <html>
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header>
      <div className="logo">CMS Title</div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/files/1VLqL6yqJTxN_drgIG8nMcODt0Xu_exFJ">Libary</a>
          </li>
          <li>
            <a href="#">Tags</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
