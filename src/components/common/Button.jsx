import React from 'react'
import './Button.css'
import { siteConfig } from '../../config/siteConfig'

function Button() {
    return (
        <a href={siteConfig.bookingLink} className="button">
            Book a Session
        </a>
    )
}

export default Button