import React from "react";
import '../styles.css';

export default function Footer()
{
    const dt = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-text">
                © {dt} - MoviebuX, All rights reserved.
            </p>
        </footer>
    );
}