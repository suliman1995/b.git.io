import React, { useState } from "react";
import {Link} from "react-router-dom"

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    
        <div className="mb-4 bg-primary">
        <nav className="navbar navbar-expand-lg bg-body-primary bg-primary">
            
                              

                                <Link className="navbar-brand" href="#">masal</Link>
                                  <Link  to='/'className="nav-link active" aria-current="page" href="#">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                  
<ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <Link to='/Neworder' className="nav-link" href="#">New order</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Allorder' className="nav-link" href="#">All order</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to= '/Invoices' className="nav-link" href="#">Invoices</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to='/Laboratories' className="nav-link" href="#">Laboratories</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/delivery' className="nav-link" href="#">delivery</Link>
                            </li>
                            
                            
                            </ul>


    </nav>
    </div>
   
  )
}

export default Nav