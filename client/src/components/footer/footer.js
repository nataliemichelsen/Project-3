// react import
import React from 'react'
import { Link } from "react-router-dom"

// footer function
function Footer() {
    return (
        <div className="footer-page">
            <p>© ReciPique 2020</p>
            <p>
                Contact Us!
                Phone: (000) 000-0000
                Email: example@mail.com
            </p>
            <p>
                Contributors:
                Natalie Michelsen @nataliemichelsen
                Ahmed Jalal @ahmedjalal93
                Tyson Hintze @hintzetyson
                Lars Tyrgstad @ltrygst

                Honorable Mentions:
                Michael McShinksky (Instructor)
                Eric Sayer (TA)
                Guillermo Villalta (TA)
                Jason Mangin (classmate, contributed to previous version of code) @jollyrgr83
            </p>
        </div>
    )
}

// react export
export default Footer
