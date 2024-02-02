import React from 'react'
import './navbar.css'

export default function Navbar(props) {
  // Dynamic Components
//   const content = "This is the First React Component"
//   const navBar = "Navbar Component"
//   return (
//     <div>
//         <div className='navBar'>
//             <span className='text'>{content} -First one is {navBar}</span>
//         </div>   
//     </div>
//   )
// }

// props and children prop
return (
  <div>
      <div className='navBar'>
          <span className='text'>My favourite food is :{props.food} -Its only :{props.Price} </span>
          {props.children}
      </div>   
  </div>
)
}
