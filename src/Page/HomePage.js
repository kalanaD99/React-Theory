import React from 'react'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'



//props variable
// Navigate using Links
export default function 
() {
  return (
    <div>
      <h1>This is HomePage</h1>

       {/* <Navbar food="Kottu" Price="lkr 3250">
        <span>This is the description</span>
       </Navbar>

       <Navbar food="Rice" Price="lkr 350">
          <button>Cancel</button>
       </Navbar>

       <Navbar food="Parata" Price="lkr 22150"/>
       <Navbar food="Pizza" Price="lkr 2350"/> */}

        <Link to={"/About"}>About Page</Link>    

    </div>
  )
}
