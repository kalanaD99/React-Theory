import React from 'react'
import './paragraph.css'

export default function Paragraph() {
  return (
    <div>
        <p className='para'>
        You need to install Node.js for local development. 
        You can also choose to use Node.js in production, 
        but you dont have to. Many React frameworks support export to a static HTML/CSS/JS folder.
        </p>
    </div>
  )
}
