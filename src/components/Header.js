import React from "react";
import '../styles.css';

export default function Header()
{
    return (
        <div className="header">
          <img className="logo" src='logo.png' alt="moviebuX"/>
          <h2 className="app-subtitle">
            It's movie time!!! - Relax and Enjoy.
          </h2>
        </div>
    );

}

